import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Shield, Zap, Rocket } from "lucide-react"

export default function About() {
  // FAQ items
  const faqItems = [
    {
      question: "What is SplitChain?",
      answer:
        "SplitChain is a social bill splitter built on Farcaster and Base that allows you to split bills with friends, create IOUs, and track payments on-chain. It combines the social aspects of bill splitting with the transparency and security of blockchain technology.",
    },
    {
      question: "What is Farcaster?",
      answer:
        "Farcaster is a decentralized social network that allows developers to build mini-apps (Frames) that can be embedded in posts. SplitChain uses Farcaster's social graph and Frames to make bill splitting more social and interactive.",
    },
    {
      question: "What is Base?",
      answer:
        "Base is a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users onchain. SplitChain uses Base for processing payments and storing IOUs because of its low fees and fast transaction times.",
    },
    {
      question: "How do IOUs work?",
      answer:
        "When you create an IOU, funds are locked in an escrow smart contract until the payment is released. This provides security for both parties - the recipient knows the funds are available, and the sender can release them when ready.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, SplitChain uses blockchain technology to ensure that all payment data is secure and transparent. Your personal information is kept private, while transaction details are stored on-chain for verification.",
    },
    {
      question: "How do I earn badges?",
      answer:
        "Badges are earned by using SplitChain in various ways - creating bills, paying on time, clearing IOUs, etc. Each badge has specific requirements that you can view on the Badges page.",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">About SplitChain</h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          SplitChain is a social bill splitter that combines the best of Web3 with the everyday need to split expenses
          with friends.
        </p>
      </div>

      {/* Our Story */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
          <CardDescription>How bill-splitting inspired this app</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none dark:prose-invert">
          <p>
            SplitChain was born out of a common frustration: the awkwardness of splitting bills and chasing friends for
            money. We've all been there - fronting the bill for dinner, then having to remind friends to pay you back,
            or forgetting who owes what after a group trip.
          </p>
          <p>
            We wanted to solve this problem by creating a platform that makes bill splitting not just easy, but also
            social and fun. By leveraging blockchain technology, we can provide transparency and security for payments,
            while the social features of Farcaster make the whole experience more engaging.
          </p>
          <p>
            Our mission is to help friends stay friends by removing the friction from shared expenses. We believe that
            financial matters shouldn't get in the way of relationships, and SplitChain is our solution to this
            universal problem.
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-center">Why Choose SplitChain?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Fast & Easy</h3>
              <p className="text-sm text-muted-foreground">
                Split bills in seconds with a user-friendly interface designed for speed.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00C2A8]/10">
                <Shield className="h-6 w-6 text-[#00C2A8]" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Secure & Transparent</h3>
              <p className="text-sm text-muted-foreground">
                All transactions are secured by blockchain technology for complete transparency.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                <CheckCircle className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Social & Fun</h3>
              <p className="text-sm text-muted-foreground">
                Share bills on Farcaster, earn badges, and climb leaderboards with friends.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                <Rocket className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Future-Proof</h3>
              <p className="text-sm text-muted-foreground">
                Built on cutting-edge technology with a roadmap for continuous innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Roadmap */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-center">Future Roadmap</h2>
        <Card>
          <CardHeader>
            <CardTitle>What's Next for SplitChain</CardTitle>
            <CardDescription>Our vision for the future of bill splitting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Q3 2025</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Recurring Bills for subscriptions and rent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Group Wallet Integration for shared expenses</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">Q4 2025</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Multi-token support for various cryptocurrencies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Cross-chain bridges for IOUs across different blockchains</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-bold">2026 and Beyond</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Mobile app for iOS and Android</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>Integration with traditional payment methods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    <span>AI-powered expense categorization and insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
