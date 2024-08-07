import { Athlete, DCATS, GenderCode } from "@/lib/constants";
import AthletesTable from "./athletes-table";
import GenderToggleGroup from "./gender-toggle-buttons";
import { Suspense } from "react";

async function fetchAthletes(gender: GenderCode) {
  const events_id = gender === 1 ? 1386 : 1385;
  const res = await fetch(
    "https://ifsc.results.info/api/v1/events/1386/registrations",
    {
      headers: {
        Referer: "https://ifsc.results.info/",
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = (await res.json()) as Athlete[];
  const dcat_id =
    gender === 0 ? DCATS.BOULDERANDLEAD_MEN : DCATS.BOULDERANDLEAD_WOMEN;

  const gender_data = [];
  for (let athlete of data) {
    for (let dcat of athlete.d_cats) {
      if (dcat.id === dcat_id) {
        gender_data.push(athlete);
      }
    }
  }
  return gender_data;
}
export default async function Athletes({
  searchParams,
}: {
  searchParams?: { gender?: string };
}) {
  const gender = (Number(searchParams?.gender) || 0) as GenderCode;
  const gender_data = await fetchAthletes(gender);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <p>Athletes</p>
      <GenderToggleGroup />
      <Suspense key={gender} fallback={<>Loading</>}>
        <AthletesTable athletes={gender_data} />
      </Suspense>
    </main>
  );
}
