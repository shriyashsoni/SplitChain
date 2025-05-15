"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Wallet, LogOut } from "lucide-react"
import { useWallet } from "./wallet-provider"
import { switchToBaseNetwork } from "@/lib/web3-config"

export function ConnectWalletButton() {
  const [open, setOpen] = useState(false)
  const { address, isConnected, connect, disconnect } = useWallet()

  // Format address for display
  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const handleConnect = async () => {
    // First try to switch to Base network
    const switched = await switchToBaseNetwork()
    if (switched) {
      connect()
    }
    setOpen(false)
  }

  if (isConnected && address) {
    return (
      <Button variant="outline" className="group relative overflow-hidden" onClick={() => disconnect()}>
        <span className="relative z-10 flex items-center">
          {formatAddress(address)}
          <LogOut className="ml-2 h-4 w-4" />
        </span>
        <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#7B61FF]/20 to-[#00C2A8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Button>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#7B61FF] hover:bg-[#6a50e6] relative overflow-hidden group">
          <span className="relative z-10 flex items-center">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </span>
          <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#7B61FF] to-[#00C2A8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Connect your wallet to use SplitChain's features for bill splitting and payments.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={handleConnect} className="bg-[#F6851B] hover:bg-[#E2761B]">
            MetaMask
          </Button>
          <Button onClick={handleConnect}>WalletConnect</Button>
          <Button onClick={handleConnect}>Coinbase Wallet</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
