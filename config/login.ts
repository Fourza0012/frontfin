export interface loginType {
    name: string,
}

export const loginableList: loginType[] = [
    { name: 'metamask' }
]

export interface NetworkType {
    name: string,
    img: string,
    netId: Number,
    switchAction?: Function
}

export interface NetworkDetail {
    chainId: string,
    rpcUrls: string[],
    chainName: string,
    nativeCurrency: {
        name: string,
        decimals: Number,
        symbol: string
    }
}

export const networkList: NetworkType[] = [
    { name: 'Bitkub Chain', img: '/image/bitkub.png', netId: 25925 }
]

export const defaultNetwork : NetworkDetail = {
    chainId: "0x6545",
    rpcUrls: ["https://rpc-testnet.bitkubchain.io"],
    chainName: "Bitkub Chain - Testnet",
    nativeCurrency: { name: "KUB", decimals: 18, symbol: "KUB" }
}