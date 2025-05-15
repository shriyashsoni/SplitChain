// USDC contract address on Base
export const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"

// USDC ABI (minimal for transfers)
export const USDC_ABI = [
  "function transfer(address to, uint256 amount) public returns (bool)",
  "function balanceOf(address account) public view returns (uint256)",
  "function decimals() public view returns (uint8)",
]

// IOUEscrow contract ABI
export const IOU_ESCROW_ABI = [
  "function createIOU(address creditor, uint256 amount) public",
  "function payIOU(uint256 index) public payable",
  "function getIOUs() public view returns (tuple(address debtor, address creditor, uint256 amount, bool paid)[])",
]

// Mock contract address - replace with actual deployed contract
export const IOU_ESCROW_ADDRESS = "0x0000000000000000000000000000000000000000"

// Base Chain ID
export const BASE_CHAIN_ID = 8453

// Helper function to add Base network to MetaMask
export async function addBaseNetwork() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x2105", // 8453 in hex
            chainName: "Base Mainnet",
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: ["https://mainnet.base.org"],
            blockExplorerUrls: ["https://basescan.org"],
          },
        ],
      })
      return true
    } catch (error) {
      console.error("Error adding Base network:", error)
      return false
    }
  }
  return false
}

// Helper function to switch to Base network
export async function switchToBaseNetwork() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x2105" }], // 8453 in hex
      })
      return true
    } catch (error: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (error.code === 4902) {
        return addBaseNetwork()
      }
      console.error("Error switching to Base network:", error)
      return false
    }
  }
  return false
}
