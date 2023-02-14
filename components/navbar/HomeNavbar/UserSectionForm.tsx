import DropDownWithBtn from "./DropDownWithBtn"
import { FaChevronDown } from 'react-icons/fa'
import { BsFillExclamationTriangleFill, BsExclamationCircle } from 'react-icons/bs'
import { MdCheckCircleOutline, MdContentCopy, MdLogout } from 'react-icons/md'
import { convertAccount } from "@/functions"
import { networkList, NetworkType } from "@/config/login"
import Image from "next/image"
import { useAppSelector } from "@/app/hooks"
import { useState } from "react"

const UserSectionForm = () => {
    const [copying, setCopying] = useState(false)
    const account = useAppSelector(state => state.user.account)
    const handleCopy = () => {
        if (!copying) {
            setCopying(true)
            navigator.clipboard.writeText(account)
            setTimeout(() => setCopying(false), 3000)
        }
    }
    return (
        <>
        <DropDownWithBtn btnIcon={<><BsFillExclamationTriangleFill color='#EBBC2E' /> Change Network</>} btnColor='font-semibold bg-[#0091FF]/[.05] border border-[#0091FF] text-[#0091FF]' typeId='network'>
            <div className=''>
                <div className="flex justify-start items-center gap-2">
                    Switch Network <BsExclamationCircle color='#D9D9D9' />
                </div>
                <div className='flex flex-col gap-3 pt-3'>
                    {networkList.map((item, key) => <NetworkBtn key={key} {...item} />)}
                </div>
            </div>
        </DropDownWithBtn>
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
                                <label className='text-[14px]'>{convertAccount(account)}</label>
                        </div>
                        <button className="relative" onClick={handleCopy}>
                          {copying && <MdCheckCircleOutline color='#0091FF' className="absolute inset-0" />}
                          <MdContentCopy color={copying ? '#d9d9d9' : '#0091FF'} />
                        </button>
                    </div>
                    <button className='ml-auto flex justify-center items-center gap-2 mt-3'>
                        <MdLogout /> Logout
                    </button>
            </div>
        </DropDownWithBtn>
        </>
    )
  }

  export default UserSectionForm

const NetworkBtn = ({ name = '', img } : NetworkType) => {
    return (
            <button className='min-w-[200px] flex justify-start items-center gap-2 bg-[#0091FF]/[.05] rounded-lg px-3 py-2'>
                <Image
                    src={img}
                    alt={name}
                    className='rounded-full'
                    width={20}
                    height={20}
                    priority
                />
                <label className='capitalize text-[#0091FF] text-[14px] font-semibold'>{name}</label>
            </button>
    )
}
