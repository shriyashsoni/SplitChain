"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    farcasterHandle: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        farcasterHandle: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll respond to your message soon.</p>
                <Button className="mt-6" variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="farcasterHandle">Farcaster Handle (Optional)</Label>
                  <Input
                    id="farcasterHandle"
                    name="farcasterHandle"
                    placeholder="@handle"
                    value={formData.farcasterHandle}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#7B61FF] hover:bg-[#6a50e6]" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Connect With Us</CardTitle>
              <CardDescription>Follow us on social media for updates and announcements.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <Twitter className="mr-3 h-5 w-5 text-[#1DA1F2]" />
                  <div>
                    <p className="font-medium">Twitter</p>
                    <p className="text-sm text-muted-foreground">@SplitChain</p>
                  </div>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <Github className="mr-3 h-5 w-5" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/splitchain</p>
                  </div>
                </a>
                <a
                  href="https://farcaster.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-xs font-bold text-purple-600">F</span>
                  </div>
                  <div>
                    <p className="font-medium">Farcaster</p>
                    <p className="text-sm text-muted-foreground">@splitchain</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
              <CardDescription>Our support team is available during these hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM ET</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM ET</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
