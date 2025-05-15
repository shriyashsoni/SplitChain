"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Users, Trophy, ArrowRight, Wallet } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import DemoFrame from "@/components/demo-frame"
import { useWallet } from "@/components/wallet-provider"
import { switchToBaseNetwork } from "@/lib/web3-config"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                  Split Bills. Stay Friends.
                </h1>
                <div className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="SplitChain Logo"
                    width={60}
                    height={60}
                    className="h-12 w-auto mr-3"
                  />
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The social bill splitter with onchain payments and IOUs for Farcaster users.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-[#7B61FF] hover:bg-[#6a50e6] group relative overflow-hidden">
                  <span className="relative z-10">Try on Farcaster</span>
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#7B61FF] to-[#00C2A8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                <SimpleConnectButton />
              </div>
            </motion.div>
            <motion.div
              className="mx-auto lg:mx-0 relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#00C2A8]/20 rounded-xl z-10"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="SplitChain App Preview"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 z-20">
                <p className="text-white font-medium">Experience the future of bill splitting</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FadeInSection>
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Split Bills with Ease</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  SplitChain makes it simple to split bills, track IOUs, and settle payments with friends.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              {/* Feature 1 */}
              <AnimatedFeatureCard
                icon={<CreditCard className="h-6 w-6 text-[#00C2A8]" />}
                title="Split in Seconds"
                description="Create bills and split them equally or custom amounts in just a few taps."
                borderColor="#00C2A8"
                delay={0}
              />

              {/* Feature 2 */}
              <AnimatedFeatureCard
                icon={<Users className="h-6 w-6 text-[#7B61FF]" />}
                title="IOUs on-chain"
                description="Track who owes what with secure on-chain IOUs and escrow payments."
                borderColor="#7B61FF"
                delay={0.2}
              />

              {/* Feature 3 */}
              <AnimatedFeatureCard
                icon={<Trophy className="h-6 w-6 text-[#00C2A8]" />}
                title="Gamified Paybacks"
                description="Earn badges, climb leaderboards, and build your reputation as a reliable friend."
                borderColor="#00C2A8"
                delay={0.4}
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* How It Works Section */}
      <FadeInSection>
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Four simple steps to split bills with your friends
                </p>
              </div>
            </div>

            <div className="relative mt-12">
              {/* Steps */}
              <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-border -translate-y-1/2" />
              <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4">
                {[
                  {
                    title: "Create a Bill",
                    description: "Enter bill details, amount, and add participants",
                  },
                  {
                    title: "Split",
                    description: "Choose equal split or custom amounts for each person",
                  },
                  {
                    title: "Pay or IOU",
                    description: "Pay now with USDC or create an IOU for later",
                  },
                  {
                    title: "Share",
                    description: "Share the bill on Farcaster for everyone to see",
                  },
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background z-10 relative overflow-hidden group">
                      <span className="text-xl font-bold relative z-10">{index + 1}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] to-[#00C2A8] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Demo Section */}
      <FadeInSection>
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Try It Yourself</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Experience how easy it is to split bills with SplitChain
                </p>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-3xl">
              <DemoFrame />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Social Proof Section */}
      <FadeInSection>
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Friends</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  See what our users are saying about SplitChain
                </p>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "SplitChain has made splitting bills with roommates so much easier. No more awkward money conversations!",
                  author: "@meena",
                  role: "Farcaster User",
                },
                {
                  quote: "The gamification aspect makes paying back friends actually fun. I love collecting badges!",
                  author: "@ravi",
                  role: "Web3 Developer",
                },
                {
                  quote: "Being able to track IOUs on-chain gives me peace of mind. Great app for group trips!",
                  author: "@anirudh",
                  role: "Crypto Enthusiast",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-background p-6 shadow-md border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4 text-4xl">"</div>
                    <p className="flex-1 text-muted-foreground">{testimonial.quote}</p>
                    <div className="mt-6">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-[#7B61FF] to-[#00C2A8]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Split Bills Smarter?</h2>
              <p className="max-w-[700px] md:text-xl opacity-90">
                Join thousands of users who are already splitting bills with ease.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-white text-[#7B61FF] hover:bg-gray-100 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FadeInSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedFeatureCard({
  icon,
  title,
  description,
  borderColor,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  description: string
  borderColor: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card
        className={cn(
          "bg-background border-2 hover:shadow-lg transition-all duration-300",
          `border-${borderColor}/20 hover:border-${borderColor}/50`,
        )}
      >
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <div className={`p-2 rounded-full bg-${borderColor}/10`}>{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SimpleConnectButton() {
  const { isConnected, connect, disconnect, address } = useWallet()

  const handleConnect = async () => {
    // First try to switch to Base network
    const switched = await switchToBaseNetwork()
    if (switched) {
      connect()
    }
  }

  if (isConnected && address) {
    return (
      <Button size="lg" variant="outline" className="group relative overflow-hidden" onClick={disconnect}>
        <span className="relative z-10 flex items-center">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#7B61FF] to-[#00C2A8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Button>
    )
  }

  return (
    <Button size="lg" variant="outline" className="group relative overflow-hidden" onClick={handleConnect}>
      <span className="relative z-10 flex items-center">
        <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
      </span>
      <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#7B61FF] to-[#00C2A8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </Button>
  )
}
