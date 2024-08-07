import { Suspense } from "react";
import ResultsTable from "./results-table";

async function fetchAthlete(id: string) {
  const res = await fetch(`https://ifsc.results.info/api/v1/athletes/${id}`, {
    headers: {
      Referer: "https://ifsc.results.info/",
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function Athlete({
  params,
}: {
  params?: { id?: string };
}) {
  const id = params?.id;
  if (!id) {
    return <p>no id</p>;
  }
  const athlete = await fetchAthlete(id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <Suspense key={id} fallback={<>Loading</>}>
        <p>
          {athlete.firstname} {athlete.lastname}
        </p>
        <ResultsTable results={athlete.all_results} />
      </Suspense>
    </main>
  );
}
