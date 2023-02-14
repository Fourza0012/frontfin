import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { addAccount, AddAccountForm } from "@/features/user/userSlice"

export const useUser = () => {
    const dispatch = useAppDispatch()
    const account = useAppSelector(state => state.user.account)
    const handleAddAccount = (res: AddAccountForm) => dispatch(addAccount(res))
    return {
        account,
        handleAddAccount
    }
}