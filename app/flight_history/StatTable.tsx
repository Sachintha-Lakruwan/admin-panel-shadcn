import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface TableRow {
  flight_name: string;
  date: string;
  states: string;
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
            <TableCell className="text-left ">{row.flight_name}</TableCell>
            <TableCell className="font-medium">{row.date}</TableCell>
            <TableCell>{row.states}</TableCell>
            <TableCell className=" text-right">{row.passenger_count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
