import { useState } from "react"
import { BsExclamationCircle } from "react-icons/bs"
import SimpleModal from "../Modal"

const VerificationKYC = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='px-[15%] py-[3%]'>
                <div className='rounded-t-xl p-10 bg-[#fafafa] flex flex-col justify-center items-center gap-3'>
                    <span className='text-sm text-[#0091FF] font-bold flex justify-center items-center gap-1'>
                        <BsExclamationCircle /> KYC is required
                    </span>
                    <small className='text-xs text-[#6B6B6B]'>Please verify your identity via KYC to use the system .</small>
                </div>
                <div className='rounded-b-xl p-4 bg-[#f1f1f1] flex justify-center items-center'>
                    <button onClick={() => setOpen(true)} className='rounded-xl bg-gradient-to-r from-[#0056da] to-[#0091ff] text-white text-sm py-[12px] px-[25px]'>
                        KYC
                    </button>
                </div>
            </div>
            <SimpleModal />
        </>
    )
}

export default VerificationKYC