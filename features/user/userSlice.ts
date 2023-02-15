import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Provider, Signer } from 'ethers'

export interface AddAccountForm { 
    account: string | null | undefined, 
    network: Number | null, 
    provider: Provider | null, 
    signer: Signer | null 
}


interface UserState {
    account: string | null | undefined,
    network: Number | null,
    balance: string,
    provider: Provider | null,
    signer: Signer | null
}

const initialState: UserState = {
    account: '',
    network: null,
    balance: '',
    provider: null,
    signer: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addAccount: (state, action: PayloadAction<AddAccountForm>) => {
            state.account = action.payload.account
            state.network = action.payload.network
            state.provider = action.payload.provider
            state.signer = action.payload.signer
        }
    },
})

export const { addAccount } = userSlice.actions
export default userSlice.reducer