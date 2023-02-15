import DropDownWithBtn from "../DropDownWithBtn"
import { FaChevronDown } from 'react-icons/fa'
import { BsExclamationCircle } from 'react-icons/bs'
import { MdCheckCircleOutline, MdContentCopy, MdLogout } from 'react-icons/md'
import { convertAccount } from "@/functions"
import Image from "next/image"
import { useState } from "react"
import NetworkSelection from "./NetworkSelection"
import { useEthereum } from "@/hooks/ethereum"

const UserSectionForm = () => { 
    const { account, deactivate } = useEthereum()
    const [copying, setCopying] = useState(false)
    const handleCopy = () => {
        if (!copying && typeof account == 'string') {
            setCopying(true)
            navigator.clipboard.writeText(account)
            setTimeout(() => setCopying(false), 3000)
        }
    }
    return (
        <>
        <NetworkSelection />
        <DropDownWithBtn btnIcon={<>{convertAccount(account)} <FaChevronDown /></>} btnColor='font-semibold bg-gradient-to-r from-[#0056da] to-[#0091ff]' typeId='account'>
            <div className=''>
                <div className="flex justify-start items-center gap-2 mb-3">
                    My Profile <BsExclamationCircle color='#D9D9D9' />
                </div>
                    <div className='min-w-[200px] flex justify-between items-center gap-2 bg-[#0091FF]/[.05] rounded-lg px-3 py-2'>
                        <div className='flex justify-center items-center gap-3'>
                                <Image
                                    src='/image/metamask.png'
                                    alt='metamask'
                                    className='rounded-full'
                                    width={30}
                                    height={30}
                                    priority
                                />
                                <span className='text-[14px]'>{convertAccount(account)}</span>
                        </div>
                        <button className="relative" onClick={handleCopy}>
                          {copying && <MdCheckCircleOutline color='#0091FF' className="absolute inset-0" />}
                          <MdContentCopy color={copying ? '#d9d9d9' : '#0091FF'} />
                        </button>
                    </div>
                    <button onClick={deactivate} className='ml-auto flex justify-center items-center gap-2 mt-3'>
                        <MdLogout /> Logout
                    </button>
            </div>
        </DropDownWithBtn>
        </>
    )
  }

  export default UserSectionForm

