"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Athlete, GenderCode, getGenderString } from "@/lib/constants";
import { useRouter } from "next/navigation";

export default function AthletesTable({ athletes }: { athletes: Athlete[] }) {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Name</TableHead>
            <TableHead className="w-[100px]">Gender</TableHead>
            <TableHead className="w-[100px]">Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {athletes?.map((athlete: Athlete) => {
            return (
              <TableRow
                key={athlete.athlete_id}
                onClick={() => {
                  router.push(`/athletes/${athlete.athlete_id}`);
                }}
              >
                <TableCell className="font-medium">{athlete.name}</TableCell>
                <TableCell>
                  {getGenderString(athlete.gender as GenderCode)}
                </TableCell>
                <TableCell>{athlete.country}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
