import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserFrom {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    idCard?: File | null
}

interface UserState {
    userData: UserFrom | null
}

const initialState: UserState = {
    userData: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserData: (state) => {
            state.userData = {
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
            }
        }
    },
})

export const { addUserData } = userSlice.actions
export default userSlice.reducer