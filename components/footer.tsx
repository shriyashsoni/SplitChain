import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top section with logo, description and newsletter */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" alt="SplitChain Logo" width={180} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Split bills, stay friends. The social bill splitter with onchain payments and IOUs for Farcaster users.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://www.instagram.com/sonishriyash"
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/in/shriyash-soni/"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://x.com/shriyash_soni?t=8Mh_W6fG5hfabPzJNTW3lg&s=09"
                icon={<Twitter className="h-5 w-5" />}
                label="Twitter"
              />
              <SocialLink href="https://github.com/shriyashsoni" icon={<Github className="h-5 w-5" />} label="GitHub" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Platform</h3>
              <ul className="mt-4 space-y-2">
                <FooterLink href="/dashboard">Dashboard</FooterLink>
                <FooterLink href="/create">Create Bill</FooterLink>
                <FooterLink href="/ious">IOUs</FooterLink>
                <FooterLink href="/leaderboard">Leaderboard</FooterLink>
                <FooterLink href="/badges">Badges</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Subscribe to our newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">Get the latest updates and news about SplitChain.</p>
            <div className="mt-4 flex max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-l-none bg-[#7B61FF] hover:bg-[#6a50e6]">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Middle section with contact info */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-muted-foreground mr-3" />
              <div>
                <h3 className="text-sm font-medium">Email</h3>
                <p className="mt-1 text-sm text-muted-foreground">contact@splitchain.app</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-muted-foreground mr-3" />
              <div>
                <h3 className="text-sm font-medium">Phone</h3>
                <p className="mt-1 text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-muted-foreground mr-3" />
              <div>
                <h3 className="text-sm font-medium">Location</h3>
                <p className="mt-1 text-sm text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SplitChain. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        {children}
      </Link>
    </li>
  )
}
