import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { addUserData } from "@/features/user/userSlice"

export const useUser = () => {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(state => state.user.userData)
    const handleAddUserData = () => dispatch(addUserData())
    return {
        userData,
        handleAddUserData
    }
}