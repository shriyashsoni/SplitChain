import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, Bell, Share2 } from "lucide-react"

interface BillDetailProps {
  params: {
    id: string
  }
}

export default function BillDetail({ params }: BillDetailProps) {
  // Mock data for the bill
  const bill = {
    id: params.id,
    title: "Dinner at Olive Garden",
    total: 120,
    creator: "@anish",
    date: "May 12, 2025",
    description: "Team dinner after the project completion",
    participants: [
      { name: "@meena", amount: 30, paid: true, method: "USDC" },
      { name: "@ravi", amount: 30, paid: false, method: "IOU" },
      { name: "@priya", amount: 30, paid: true, method: "USDC" },
      { name: "@anirudh", amount: 30, paid: false, method: "IOU" },
    ],
    hasIOUs: true,
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{bill.title}</h1>
          <p className="mt-1 text-muted-foreground">
            Created by {bill.creator} on {bill.date}
          </p>
        </div>
        <div className="mt-4 flex gap-2 md:mt-0">
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          <Button className="bg-[#7B61FF] hover:bg-[#6a50e6]">
            <Bell className="mr-2 h-4 w-4" /> Send Reminder
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Bill Details</CardTitle>
              <CardDescription>{bill.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-center justify-between rounded-lg bg-muted p-4">
                <span className="text-sm font-medium">Total Amount</span>
                <span className="text-2xl font-bold">${bill.total.toFixed(2)}</span>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Participant</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bill.participants.map((participant, index) => (
                    <TableRow key={index}>
                      <TableCell>{participant.name}</TableCell>
                      <TableCell>${participant.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        {participant.paid ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Paid
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Pending
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{participant.method}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/dashboard">Back to Dashboard</Link>
              </Button>
              <Button className="bg-[#00C2A8] hover:bg-[#00a892]">Pay Now</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          {bill.hasIOUs && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-600">
                  <AlertCircle className="mr-2 h-5 w-5" /> Escrow Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">IOU Status</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      2 participants have created IOUs for this bill. Funds are held in escrow until payment is
                      released.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Due Date</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      IOUs are due by <span className="font-bold">May 19, 2025</span>
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Contract Address</h3>
                    <p className="mt-1 overflow-hidden text-ellipsis text-sm text-muted-foreground">0x1a2b...3c4d</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View on Base Explorer
                </Button>
              </CardFooter>
            </Card>
          )}

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Frame Embed</CardTitle>
              <CardDescription>Share this bill on Farcaster</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square w-full rounded-lg bg-muted flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Frame Preview</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" /> Share Frame
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
