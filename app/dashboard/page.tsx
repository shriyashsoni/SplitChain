import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, ArrowRight, AlertCircle } from "lucide-react"

export default function Dashboard() {
  // Mock data for bills
  const activeBills = [
    {
      id: "bill-1",
      title: "Dinner at Olive Garden",
      total: 120,
      participants: 4,
      paid: 2,
      pending: 2,
      date: "May 12, 2025",
    },
    {
      id: "bill-2",
      title: "Movie Night",
      total: 80,
      participants: 3,
      paid: 1,
      pending: 2,
      date: "May 10, 2025",
    },
    {
      id: "bill-3",
      title: "Grocery Shopping",
      total: 150,
      participants: 2,
      paid: 0,
      pending: 2,
      date: "May 8, 2025",
    },
  ]

  // Mock data for IOUs
  const iouData = {
    oweToOthers: [
      { user: "@meena", amount: 20 },
      { user: "@anirudh", amount: 15 },
    ],
    othersOweYou: [
      { user: "@ravi", amount: 30 },
      { user: "@priya", amount: 25 },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">Welcome back! Here's an overview of your bills and IOUs.</p>
        </div>
        <Button className="mt-4 md:mt-0 bg-[#7B61FF] hover:bg-[#6a50e6]" size="lg">
          <Plus className="mr-2 h-4 w-4" /> Create New Bill
        </Button>
      </div>

      {/* Active Bills */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Your Active Bills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeBills.map((bill) => (
            <Card key={bill.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle>{bill.title}</CardTitle>
                <CardDescription>Created on {bill.date}</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Amount</span>
                  <span className="text-xl font-bold">${bill.total}</span>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Participants</span>
                  <span>{bill.participants}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {bill.paid} Paid
                    </Badge>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      {bill.pending} Pending
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-3">
                <Button variant="outline" asChild>
                  <Link href={`/bill/${bill.id}`}>View Details</Link>
                </Button>
                <Button className="bg-[#00C2A8] hover:bg-[#00a892]">Pay Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* IOUs Summary */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {/* Owe to Others */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-amber-600">
              <AlertCircle className="mr-2 h-5 w-5" /> You Owe
            </CardTitle>
          </CardHeader>
          <CardContent>
            {iouData.oweToOthers.length > 0 ? (
              <ul className="space-y-3">
                {iouData.oweToOthers.map((iou, index) => (
                  <li key={index} className="flex items-center justify-between rounded-lg border p-3">
                    <span>{iou.user}</span>
                    <div className="flex items-center">
                      <span className="font-bold">${iou.amount}</span>
                      <Button variant="ghost" size="sm" className="ml-2">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground">You don't owe anything right now!</p>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All
            </Button>
          </CardFooter>
        </Card>

        {/* Others Owe You */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <AlertCircle className="mr-2 h-5 w-5" /> Owed to You
            </CardTitle>
          </CardHeader>
          <CardContent>
            {iouData.othersOweYou.length > 0 ? (
              <ul className="space-y-3">
                {iouData.othersOweYou.map((iou, index) => (
                  <li key={index} className="flex items-center justify-between rounded-lg border p-3">
                    <span>{iou.user}</span>
                    <div className="flex items-center">
                      <span className="font-bold">${iou.amount}</span>
                      <Button variant="ghost" size="sm" className="ml-2">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground">No one owes you anything right now!</p>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Gamified Stats Widget */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Your Stats</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <span className="text-sm text-muted-foreground">Level</span>
                <span className="text-3xl font-bold text-[#7B61FF]">7</span>
                <span className="mt-1 text-xs text-muted-foreground">Trusted Splitter</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <span className="text-sm text-muted-foreground">Honesty Score</span>
                <span className="text-3xl font-bold text-[#00C2A8]">92%</span>
                <span className="mt-1 text-xs text-muted-foreground">Top 10%</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <span className="text-sm text-muted-foreground">Badges</span>
                <span className="text-3xl font-bold text-amber-500">5</span>
                <span className="mt-1 text-xs text-muted-foreground">View Collection</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
