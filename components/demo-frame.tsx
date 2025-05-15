"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Users, DollarSign, Share2, Check } from "lucide-react"

export default function DemoFrame() {
  const [step, setStep] = useState(1)
  const [billAmount, setBillAmount] = useState("")
  const [billTitle, setBillTitle] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setIsComplete(true)
      }, 1500)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleReset = () => {
    setStep(1)
    setBillAmount("")
    setBillTitle("")
    setIsComplete(false)
  }

  return (
    <Card className="w-full shadow-lg border-2 border-[#7B61FF]/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#7B61FF]/10 to-[#00C2A8]/10">
        <CardTitle className="text-center">Interactive Demo</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    i < step
                      ? "bg-[#00C2A8] text-white"
                      : i === step
                        ? "bg-[#7B61FF] text-white"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < step ? <Check className="h-5 w-5" /> : i}
                </div>
                <span className="text-xs mt-2 text-muted-foreground">
                  {i === 1 ? "Details" : i === 2 ? "Friends" : "Review"}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 h-1 w-full bg-muted overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[#7B61FF] to-[#00C2A8]"
              initial={{ width: `${(step - 1) * 50}%` }}
              animate={{ width: `${(step - 1) * 50}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bill Created!</h3>
              <p className="text-center text-muted-foreground mb-6">
                Your bill "{billTitle || "Dinner"}" for ${billAmount || "120"} has been split successfully.
              </p>
              <div className="flex gap-4 mt-4">
                <Button variant="outline" onClick={handleReset}>
                  Create Another
                </Button>
                <Button className="bg-[#7B61FF]">
                  <Share2 className="mr-2 h-4 w-4" /> Share Bill
                </Button>
              </div>
            </motion.div>
          ) : (
            <>
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Bill Title</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Dinner at Restaurant"
                        value={billTitle}
                        onChange={(e) => setBillTitle(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Total Amount</Label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">$</span>
                        <Input
                          id="amount"
                          type="number"
                          className="pl-8"
                          placeholder="0.00"
                          value={billAmount}
                          onChange={(e) => setBillAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Split Method</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="justify-start border-[#7B61FF]/50">
                          <DollarSign className="mr-2 h-4 w-4 text-[#7B61FF]" /> Equal Split
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <DollarSign className="mr-2 h-4 w-4" /> Custom Split
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Add Friends</Label>
                      <Badge className="bg-[#7B61FF]">3 Selected</Badge>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Meena", handle: "@meena", selected: true },
                        { name: "Ravi", handle: "@ravi", selected: true },
                        { name: "Anirudh", handle: "@anirudh", selected: true },
                        { name: "Priya", handle: "@priya", selected: false },
                      ].map((friend, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 rounded-lg border ${
                            friend.selected ? "border-[#7B61FF] bg-[#7B61FF]/5" : "border-border"
                          }`}
                        >
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarFallback>{friend.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{friend.name}</p>
                              <p className="text-xs text-muted-foreground">{friend.handle}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Badge
                              variant={friend.selected ? "default" : "outline"}
                              className={friend.selected ? "bg-[#7B61FF]" : ""}
                            >
                              {friend.selected ? "Selected" : "Add"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      <Users className="mr-2 h-4 w-4" /> Add More Friends
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{billTitle || "Dinner"}</h3>
                        <span className="font-bold">${billAmount || "120"}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Split equally between 3 friends</p>
                      <div className="space-y-2">
                        {["@meena", "@ravi", "@anirudh"].map((friend, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span>{friend}</span>
                            <span>${billAmount ? (Number.parseFloat(billAmount) / 3).toFixed(2) : "40.00"}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Payment Options</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="justify-start border-[#00C2A8]/50">
                          <DollarSign className="mr-2 h-4 w-4 text-[#00C2A8]" /> Pay Now
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <DollarSign className="mr-2 h-4 w-4" /> Pay Later (IOU)
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </CardContent>
      {!isComplete && (
        <CardFooter className="flex justify-between border-t p-4">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>
            Back
          </Button>
          <Button className="bg-[#7B61FF] hover:bg-[#6a50e6]" onClick={handleNext} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : step === 3 ? (
              "Create Bill"
            ) : (
              "Next"
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
