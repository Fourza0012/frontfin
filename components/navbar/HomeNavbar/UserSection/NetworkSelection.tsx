import { networkList } from "@/config/login"
import Image from "next/image"
import { BsExclamationCircle, BsFillExclamationTriangleFill } from "react-icons/bs"
import DropDownWithBtn from "../DropDownWithBtn"
import { NetworkType } from '@/config/login'
import { FaChevronDown } from "react-icons/fa"
import { useEthereum } from "@/hooks/ethereum"
import { convertHexadecimal } from "@/functions"

const NetworkSelection = () => {
    const { switchNetwork } = useEthereum()
    return (
        <DropDownWithBtn btnIcon={<ShowCurrentNetwork />} btnColor='font-semibold bg-[#0091FF]/[.05] border border-[#0091FF] text-[#0091FF]' typeId='network'>
            <div className=''>
                <div className="flex justify-start items-center gap-2">
                    Switch Network <BsExclamationCircle color='#D9D9D9' />
                </div>
                <div className='flex flex-col gap-3 pt-3'>
                    {networkList.map((item, key) => <NetworkBtn key={key} {...item} switchAction={switchNetwork} />)}
                </div>
            </div>
        </DropDownWithBtn>
    )
}

export default NetworkSelection

const ShowCurrentNetwork = () => {
    const { chainId } = useEthereum()
    const currentShow = networkList.find(item => item.netId === chainId)
    return (
        <>
        {currentShow
        ? (
        <>
            <Image
                src={currentShow.img}
                alt={currentShow.name}
                className='rounded-full'
                width={20}
                height={20}
                priority
            />
            <span className='capitalize text-[#0091FF] text-[14px] font-semibold'>{currentShow.name}</span>
            <FaChevronDown />
        </>)
        :<><BsFillExclamationTriangleFill color='#EBBC2E' /> Change Network</>}
        </>
    )
}

const NetworkBtn = ({ name = '', img, netId, switchAction } : NetworkType) => {
    const { chainId } = useEthereum()
    const checkActive = netId == chainId
    const handleSwitch = () => {
        if (typeof switchAction == 'function') switchAction(netId)
    }
    return (
            <button onClick={handleSwitch} disabled={checkActive} className={`min-w-[200px] flex justify-start items-center gap-2 bg-[#0091FF]/[.05] ${checkActive ? 'grayscale' : ''} rounded-lg px-3 py-2`}>
                <Image
                    src={img}
                    alt={name}
                    className='rounded-full'
                    width={20}
                    height={20}
                    priority
                />
                <span className='capitalize text-[#0091FF] text-[14px] font-semibold'>{name}</span>
            </button>
    )
}