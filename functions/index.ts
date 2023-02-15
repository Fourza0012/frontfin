export const convertAccount = (account: string | null | undefined) => {
    if (typeof account == 'string') {
        return account.slice(0, 4) + '...' + account.slice(-4)
    } else {
        return '-'
    }
}

export const convertHexadecimal = (number: any) => {
    if (typeof number == 'number') {
        return `0x${number.toString(16)}`
    }
}