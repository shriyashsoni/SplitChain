"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Medal, Trophy, Award, Zap } from "lucide-react"

export default function Leaderboard() {
  const [timeframe, setTimeframe] = useState("weekly")

  // Mock data for leaderboard
  const leaderboardData = {
    topPayers: [
      { rank: 1, user: "@meena", points: 122, badge: "Gold Payer" },
      { rank: 2, user: "@anirudh", points: 115, badge: "Bill Beast" },
      { rank: 3, user: "@ravi", points: 98, badge: "Quick Settler" },
      { rank: 4, user: "@priya", points: 87, badge: "Trusted Friend" },
      { rank: 5, user: "@sanjay", points: 76, badge: "Reliable" },
    ],
    topCreators: [
      { rank: 1, user: "@anish", points: 145, badge: "Bill Master" },
      { rank: 2, user: "@divya", points: 132, badge: "Organizer" },
      { rank: 3, user: "@vikram", points: 118, badge: "Event Planner" },
      { rank: 4, user: "@meena", points: 105, badge: "Social Butterfly" },
      { rank: 5, user: "@anirudh", points: 92, badge: "Group Leader" },
    ],
    iouCleared: [
      { rank: 1, user: "@ravi", points: 110, badge: "IOU Hero" },
      { rank: 2, user: "@priya", points: 105, badge: "Debt Destroyer" },
      { rank: 3, user: "@sanjay", points: 95, badge: "Promise Keeper" },
      { rank: 4, user: "@meena", points: 85, badge: "Honest Homie" },
      { rank: 5, user: "@vikram", points: 75, badge: "Reliable Friend" },
    ],
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Medal className="h-6 w-6 text-amber-700" />
      default:
        return <span className="flex h-6 w-6 items-center justify-center font-bold">{rank}</span>
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
          <p className="mt-1 text-muted-foreground">See who's leading the pack in bill splitting and payments</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="alltime">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="topPayers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="topPayers">Top Payers</TabsTrigger>
          <TabsTrigger value="topCreators">Top Creators</TabsTrigger>
          <TabsTrigger value="iouCleared">Most IOUs Cleared</TabsTrigger>
        </TabsList>

        {/* Top Payers */}
        <TabsContent value="topPayers">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-[#7B61FF]" /> Top Payers
              </CardTitle>
              <CardDescription>
                Users who have paid the most bills{" "}
                {timeframe === "weekly" ? "this week" : timeframe === "monthly" ? "this month" : "of all time"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboardData.topPayers.map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        {getRankIcon(user.rank)}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{user.user}</p>
                        <div className="flex items-center">
                          <Award className="mr-1 h-3 w-3 text-amber-500" />
                          <p className="text-xs text-muted-foreground">{user.badge}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{user.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Top Creators */}
        <TabsContent value="topCreators">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-[#00C2A8]" /> Top Creators
              </CardTitle>
              <CardDescription>
                Users who have created the most bills{" "}
                {timeframe === "weekly" ? "this week" : timeframe === "monthly" ? "this month" : "of all time"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboardData.topCreators.map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        {getRankIcon(user.rank)}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{user.user}</p>
                        <div className="flex items-center">
                          <Award className="mr-1 h-3 w-3 text-amber-500" />
                          <p className="text-xs text-muted-foreground">{user.badge}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{user.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Most IOUs Cleared */}
        <TabsContent value="iouCleared">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-amber-500" /> Most IOUs Cleared
              </CardTitle>
              <CardDescription>
                Users who have cleared the most IOUs{" "}
                {timeframe === "weekly" ? "this week" : timeframe === "monthly" ? "this month" : "of all time"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboardData.iouCleared.map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        {getRankIcon(user.rank)}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{user.user}</p>
                        <div className="flex items-center">
                          <Award className="mr-1 h-3 w-3 text-amber-500" />
                          <p className="text-xs text-muted-foreground">{user.badge}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{user.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
