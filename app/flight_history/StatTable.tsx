import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface TableRow {
  flight_code: string;
  date: string;
  state: string;
  passenger_count: number;
}

export function StatTable({ data }: { data: TableRow[] }) {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Flight Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Passenger Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={crypto.randomUUID()}>
            <TableCell className="text-left ">{row.flight_code}</TableCell>
            <TableCell className="font-medium">{row.date}</TableCell>
            <TableCell>{row.state}</TableCell>
            <TableCell className=" text-right">{row.passenger_count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
