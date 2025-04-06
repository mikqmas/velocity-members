import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const trackRecords = [
  {
    track: "Spa-Francorchamps",
    name: "John Smith",
    recordTime: "2:15.123",
    date: "2024-03-15",
  },
  {
    track: "Silverstone",
    name: "Sarah Johnson",
    recordTime: "1:28.456",
    date: "2024-03-10",
  },
  {
    track: "Monza",
    name: "Michael Brown",
    recordTime: "1:21.789",
    date: "2024-03-05",
  },
  {
    track: "Nürburgring",
    name: "Emma Wilson",
    recordTime: "7:45.321",
    date: "2024-03-01",
  },
  {
    track: "Le Mans",
    name: "David Lee",
    recordTime: "3:15.987",
    date: "2024-02-28",
  },
]

export function TrackRecordsTable() {
  return (
    <div className="rounded-md border border-white/[.145] bg-black/[.6]">
      <Table>
        <TableHeader>
          <TableRow className="border-white/[.145] hover:bg-white/5">
            <TableHead className="text-white text-lg py-4">Track</TableHead>
            <TableHead className="text-white text-lg py-4">Driver Name</TableHead>
            <TableHead className="text-white text-lg py-4">Record Time</TableHead>
            <TableHead className="text-white text-lg py-4">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trackRecords.map((record, index) => (
            <TableRow key={index} className="border-white/[.145] hover:bg-white/5">
              <TableCell className="text-white text-base py-4">{record.track}</TableCell>
              <TableCell className="text-white text-base py-4">{record.name}</TableCell>
              <TableCell className="text-white text-base py-4">{record.recordTime}</TableCell>
              <TableCell className="text-white text-base py-4">{record.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 