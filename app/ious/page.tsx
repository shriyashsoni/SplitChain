"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle } from "lucide-react"

export default function IOUs() {
  const [activeTab, setActiveTab] = useState("outgoing")

  // Mock data for IOUs
  const iouData = {
    outgoing: [
      {
        id: 1,
        to: "@meena",
        amount: 20,
        dueDate: "May 20, 2025",
        billTitle: "Dinner at Olive Garden",
        isUrgent: false,
      },
      { id: 2, to: "@anirudh", amount: 15, dueDate: "May 18, 2025", billTitle: "Movie Night", isUrgent: true },
      { id: 3, to: "@priya", amount: 35, dueDate: "May 25, 2025", billTitle: "Grocery Shopping", isUrgent: false },
    ],
    incoming: [
      {
        id: 4,
        from: "@ravi",
        amount: 30,
        dueDate: "May 22, 2025",
        billTitle: "Dinner at Olive Garden",
        inEscrow: true,
      },
      { id: 5, from: "@sanjay", amount: 25, dueDate: "May 19, 2025", billTitle: "Uber Ride", inEscrow: true },
      { id: 6, from: "@divya", amount: 40, dueDate: "May 28, 2025", billTitle: "Concert Tickets", inEscrow: false },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">IOU Explorer</h1>
        <p className="mt-1 text-muted-foreground">Track all your IOUs - both given and received</p>
      </div>

      <Tabs defaultValue="outgoing" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="outgoing">IOUs Owed (Outgoing)</TabsTrigger>
          <TabsTrigger value="incoming">IOUs Receivable (Incoming)</TabsTrigger>
        </TabsList>

        {/* Outgoing IOUs */}
        <TabsContent value="outgoing" className="space-y-6">
          {iouData.outgoing.length > 0 ? (
            iouData.outgoing.map((iou) => (
              <Card key={iou.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{iou.billTitle}</CardTitle>
                    {iou.isUrgent && (
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        <AlertTriangle className="mr-1 h-3 w-3" /> Due Soon
                      </Badge>
                    )}
                  </div>
                  <CardDescription>Due on {iou.dueDate}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        {iou.to.charAt(1).toUpperCase()}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{iou.to}</p>
                        <p className="text-sm text-muted-foreground">Recipient</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">${iou.amount}</p>
                      <p className="text-sm text-muted-foreground">You owe</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-3">
                  <Button variant="outline">View Bill</Button>
                  <Button className="bg-[#00C2A8] hover:bg-[#00a892]">Release Payment</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Clock className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-center text-muted-foreground">You don't have any outgoing IOUs right now.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Incoming IOUs */}
        <TabsContent value="incoming" className="space-y-6">
          {iouData.incoming.length > 0 ? (
            iouData.incoming.map((iou) => (
              <Card key={iou.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{iou.billTitle}</CardTitle>
                    {iou.inEscrow ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        In Escrow
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        Pending
                      </Badge>
                    )}
                  </div>
                  <CardDescription>Due on {iou.dueDate}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        {iou.from.charAt(1).toUpperCase()}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{iou.from}</p>
                        <p className="text-sm text-muted-foreground">Sender</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">${iou.amount}</p>
                      <p className="text-sm text-muted-foreground">Owed to you</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-3">
                  <Button variant="outline">View Bill</Button>
                  <Button className="bg-[#7B61FF] hover:bg-[#6a50e6]" disabled={!iou.inEscrow}>
                    {iou.inEscrow ? "Claim Payment" : "Pending Escrow"}
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Clock className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-center text-muted-foreground">You don't have any incoming IOUs right now.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Timeline Chart */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>IOU Timeline</CardTitle>
          <CardDescription>Visualize your upcoming IOU deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full rounded-lg bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Timeline Chart Visualization</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
