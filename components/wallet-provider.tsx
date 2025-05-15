"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type WalletContextType = {
  address: string | null
  isConnected: boolean
  connect: () => void
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  isConnected: false,
  connect: () => {},
  disconnect: () => {},
})

export function useWallet() {
  return useContext(WalletContext)
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Mock wallet connection function
  const connect = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        if (accounts.length > 0) {
          setAddress(accounts[0])
          setIsConnected(true)
          localStorage.setItem("walletConnected", "true")
        }
      } catch (error) {
        console.error("Error connecting wallet:", error)
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet to connect")
    }
  }

  const disconnect = () => {
    setAddress(null)
    setIsConnected(false)
    localStorage.removeItem("walletConnected")
  }

  // Check if wallet was previously connected
  useEffect(() => {
    setMounted(true)

    const checkConnection = async () => {
      const wasConnected = localStorage.getItem("walletConnected") === "true"

      if (wasConnected && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" })
          if (accounts.length > 0) {
            setAddress(accounts[0])
            setIsConnected(true)
          } else {
            // If no accounts found, clear the stored connection state
            localStorage.removeItem("walletConnected")
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error)
          localStorage.removeItem("walletConnected")
        }
      }
    }

    checkConnection()
  }, [])

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0])
          setIsConnected(true)
        } else {
          setAddress(null)
          setIsConnected(false)
          localStorage.removeItem("walletConnected")
        }
      }

      window.ethereum.on("accountsChanged", handleAccountsChanged)

      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged)
      }
    }
  }, [])

  return (
    <WalletContext.Provider value={{ address, isConnected, connect, disconnect }}>
      {mounted && children}
    </WalletContext.Provider>
  )
}

// Add Ethereum type to the Window interface
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>
      on: (event: string, listener: (...args: any[]) => void) => void
      removeListener: (event: string, listener: (...args: any[]) => void) => void
    }
  }
}
