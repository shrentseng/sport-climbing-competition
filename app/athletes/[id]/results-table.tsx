import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Result } from "@/lib/constants";

export default async function ResultsTable({ results }: { results: Result[] }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Rank</TableHead>
            <TableHead className="w-[100px]">Event</TableHead>
            <TableHead className="w-[100px]">Discipline</TableHead>
            <TableHead className="w-[100px]">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.map((result: Result) => {
            return (
              <TableRow key={result.result_url}>
                <TableCell className="font-medium">{result.rank}</TableCell>
                <TableCell>{result.event_name}</TableCell>
                <TableCell>{result.discipline}</TableCell>
                <TableCell>{result.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
