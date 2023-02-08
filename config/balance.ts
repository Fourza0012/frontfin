export interface BalanceData {
    symbol?: string,
    value?: number,
    balance?: number
}

export interface BalanceSymbol {
    symbol: string,
    src: string
}

export const defaultBalance: BalanceData[] = [
    {
        symbol: 'btc',
        value: 0,
        balance: 0
    },
    {
        symbol: 'eth',
        value: 0,
        balance: 0
    },
    {
        symbol: 'ada',
        value: 0,
        balance: 0
    }
]

export const balanceSymbol: BalanceSymbol[] = [
    {
        symbol: 'btc',
        src: '/image/bitcoin.png'
    },
    {
        symbol: 'eth',
        src: '/image/etherum.png'
    },
    {
        symbol: 'ada',
        src: '/image/ada.png'
    },
]