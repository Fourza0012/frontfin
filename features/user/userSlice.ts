import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ethers, Provider, Signer } from 'ethers'
interface UserState {
    account: string,
    balance: string,
    provider: Provider | null,
    signer: Signer | null
}

const initialState: UserState = {
    account: '',
    balance: '',
    provider: null,
    signer: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addAccount: (state, action: PayloadAction<{ account: string, provider: Provider | null, signer: Signer | null }>) => {
            state.account = action.payload.account
            state.provider = action.payload.provider
            state.signer = action.payload.signer
        }
    },
})

export const { addAccount } = userSlice.actions
export default userSlice.reducer