import { balanceSymbol } from "@/config/balance"

export const findBalanceSymbol = (symbol: string) : string | undefined => {
     const result = balanceSymbol.find(item => item.symbol === symbol)
    return result?.src
}