"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ChevronRight, Users, Share2 } from "lucide-react"

export default function CreateBill() {
  const [splitMethod, setSplitMethod] = useState("equal")
  const [allowIOU, setAllowIOU] = useState(true)
  const [participants, setParticipants] = useState([
    { id: 1, handle: "", amount: "" },
    { id: 2, handle: "", amount: "" },
  ])

  const addParticipant = () => {
    const newId = participants.length > 0 ? Math.max(...participants.map((p) => p.id)) + 1 : 1
    setParticipants([...participants, { id: newId, handle: "", amount: "" }])
  }

  const removeParticipant = (id: number) => {
    if (participants.length > 2) {
      setParticipants(participants.filter((p) => p.id !== id))
    }
  }

  const updateParticipant = (id: number, field: string, value: string) => {
    setParticipants(participants.map((p) => (p.id === id ? { ...p, [field]: value } : p)))
  }

  return (
    <div className="container max-w-3xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create a New Bill</h1>
        <p className="mt-1 text-muted-foreground">Fill in the details to split a bill with your friends</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bill Details</CardTitle>
          <CardDescription>Enter the bill information and how you want to split it</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Bill Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Bill Title</Label>
            <Input id="title" placeholder="e.g., Dinner at Olive Garden" />
          </div>

          {/* Bill Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">Total Amount</Label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">$</span>
              <Input id="amount" type="number" className="pl-8" placeholder="0.00" />
            </div>
          </div>

          {/* Bill Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea id="description" placeholder="Add any notes about this bill" />
          </div>

          {/* Split Method */}
          <div className="space-y-3">
            <Label>Split Method</Label>
            <RadioGroup value={splitMethod} onValueChange={setSplitMethod} className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="equal" id="equal" />
                <Label htmlFor="equal" className="font-normal">
                  Split Equally
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom" className="font-normal">
                  Custom Amounts
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Participants */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Participants</Label>
              <Button type="button" variant="outline" size="sm" onClick={addParticipant}>
                Add Person
              </Button>
            </div>

            <div className="space-y-3">
              {participants.map((participant) => (
                <div key={participant.id} className="flex items-center gap-3">
                  <div className="flex-1">
                    <Input
                      placeholder="@handle or wallet address"
                      value={participant.handle}
                      onChange={(e) => updateParticipant(participant.id, "handle", e.target.value)}
                    />
                  </div>
                  {splitMethod === "custom" && (
                    <div className="w-24">
                      <Input
                        type="number"
                        placeholder="Amount"
                        value={participant.amount}
                        onChange={(e) => updateParticipant(participant.id, "amount", e.target.value)}
                      />
                    </div>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeParticipant(participant.id)}
                    disabled={participants.length <= 2}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-3">
            <Label>Payment Options</Label>
            <div className="flex items-center space-x-2">
              <Switch id="allow-iou" checked={allowIOU} onCheckedChange={setAllowIOU} />
              <Label htmlFor="allow-iou" className="font-normal">
                Allow IOU (Pay Later)
              </Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-[#7B61FF] hover:bg-[#6a50e6]">
            Create Bill <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex w-full gap-4">
            <Button variant="outline" className="flex-1">
              <Users className="mr-2 h-4 w-4" /> Preview
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 className="mr-2 h-4 w-4" /> Share in Farcaster
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
