export interface loginType {
    name: string,
}

export const loginableList: loginType[] = [
    { name: 'metamask' }
]

export interface NetworkType {
    name: string,
    img: string,
    netId: Number
}

export const networkList: NetworkType[] = [
    { name: 'Bitkub Chain', img: '/image/bitkub.png', netId: 25925 }
]