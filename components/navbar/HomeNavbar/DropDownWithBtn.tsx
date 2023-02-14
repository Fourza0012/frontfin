import { ReactNode, useEffect, useState } from 'react'
type loginDropType = {
    btnIcon?: ReactNode,
    btnColor: string,
    typeId: string,
    children: ReactNode
}
const DropDownWithBtn = ({ btnIcon, btnColor = 'bg-white', typeId, children } : loginDropType) => {
    const [open, setOpen] = useState(false)
    const closeDropdown = (e : MouseEvent) => {
    const btnMenu = document.getElementById(`btn-${typeId}`)
    const loginMenu = document.getElementById(`drop-${typeId}`)
    if (btnMenu?.contains((e.target as HTMLElement)) || loginMenu?.contains((e.target as HTMLElement))) return
      setOpen(false)
    }
    useEffect(() => {
      document.body.addEventListener('click', closeDropdown)
      return () => document.body.removeEventListener('click', closeDropdown)
    }, [])
    return (
        <div className='relative'>
        <button id={`btn-${typeId}`} className={`flex justify-center items-center gap-1 capitalize text-white ${btnColor} rounded-[12px] px-[25px] py-[10px]`} onClick={() => setOpen(true)}>
          {btnIcon}
        </button>
        <div id={`drop-${typeId}`} className={`absolute ${open ? '' : 'hidden'} rounded-xl bg-white top-[150%] right-0 p-5 z-[3] shadow-lg flex flex-col justify-center items-center gap-3`}>
              {children}
        </div>
        </div>
    )
}

export default DropDownWithBtn
