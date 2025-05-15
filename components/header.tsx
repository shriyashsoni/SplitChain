"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ConnectWalletButton } from "./connect-wallet-button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  {
    name: "Bills",
    href: "#",
    submenu: [
      { name: "Create Bill", href: "/create" },
      { name: "View Bills", href: "/dashboard" },
    ],
  },
  { name: "IOUs", href: "/ious" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Badges", href: "/badges" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/50 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <motion.div
          className="flex lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">SplitChain</span>
            <Image
              src="/images/logo.png"
              alt="SplitChain Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <motion.div
          className="hidden lg:flex lg:gap-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navigation.map((item) => {
            if (item.submenu) {
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center text-sm font-medium transition-colors hover:text-primary",
                        pathname.startsWith(item.submenu[0].href) ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.name} asChild>
                        <Link
                          href={subitem.href}
                          className={cn("w-full", pathname === subitem.href ? "text-primary" : "")}
                        >
                          {subitem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </motion.div>
        <motion.div
          className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ModeToggle />
          <ConnectWalletButton />
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SplitChain</span>
              <Image src="/images/logo.png" alt="SplitChain Logo" width={180} height={40} className="h-8 w-auto" />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  if (item.submenu) {
                    return (
                      <div key={item.name} className="space-y-2">
                        <div className="-mx-3 px-3 py-2 text-base font-semibold leading-7 text-muted-foreground">
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className={cn(
                                "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                                pathname === subitem.href ? "text-primary" : "text-muted-foreground hover:bg-accent",
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                        pathname === item.href ? "text-primary" : "text-muted-foreground hover:bg-accent",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
              <div className="flex flex-col gap-4 py-6">
                <ModeToggle />
                <ConnectWalletButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
