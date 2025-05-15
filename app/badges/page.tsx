import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Award, Trophy, Clock, Users, CheckCircle } from "lucide-react"

export default function Badges() {
  // Mock data for badges
  const badges = [
    {
      id: 1,
      name: "Lightning Splitter",
      description: "Created 10+ bills",
      icon: <Zap className="h-6 w-6 text-[#7B61FF]" />,
      unlocked: true,
      xpPoints: 100,
      unlockCondition: "Create 10 or more bills",
    },
    {
      id: 2,
      name: "IOU Hero",
      description: "Cleared 5 IOUs",
      icon: <Award className="h-6 w-6 text-[#00C2A8]" />,
      unlocked: true,
      xpPoints: 150,
      unlockCondition: "Clear 5 or more IOUs",
    },
    {
      id: 3,
      name: "Honest Homie",
      description: "Paid on time 10x",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      unlocked: true,
      xpPoints: 120,
      unlockCondition: "Pay 10 bills on time",
    },
    {
      id: 4,
      name: "Bill Beast",
      description: "Split 20+ bills",
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
      unlocked: false,
      xpPoints: 200,
      unlockCondition: "Split 20 or more bills",
    },
    {
      id: 5,
      name: "Quick Settler",
      description: "Paid within 24 hours 5x",
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      unlocked: false,
      xpPoints: 100,
      unlockCondition: "Pay 5 bills within 24 hours of creation",
    },
    {
      id: 6,
      name: "Group Leader",
      description: "Created bills with 5+ people",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      unlocked: false,
      xpPoints: 150,
      unlockCondition: "Create a bill with 5 or more participants",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Badges</h1>
        <p className="mt-1 text-muted-foreground">Collect badges by using SplitChain and build your reputation</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {badges.map((badge) => (
          <Card key={badge.id} className={`overflow-hidden ${!badge.unlocked ? "opacity-70" : ""}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{badge.name}</CardTitle>
                {badge.unlocked ? (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Unlocked
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-muted text-muted-foreground">
                    Locked
                  </Badge>
                )}
              </div>
              <CardDescription>{badge.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full ${badge.unlocked ? "bg-primary/10" : "bg-muted"}`}
              >
                {badge.icon}
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium">{badge.xpPoints} XP</p>
                <p className="text-sm text-muted-foreground">{badge.unlocked ? "Earned" : "To Earn"}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                {badge.unlocked ? "View Details" : badge.unlockCondition}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Your Badge Progress</CardTitle>
          <CardDescription>You've unlocked 3 out of 6 badges. Keep going!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-8 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-gradient-to-r from-[#7B61FF] to-[#00C2A8]" style={{ width: "50%" }} />
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span>0</span>
            <span>3/6 Badges</span>
            <span>6</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
