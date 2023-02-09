import { ReactNode } from "react"
import NormalHeader from "../Header"
import HomeNavbar from "../navbar/HomeNavbar"
type ChildProp = {
    children: ReactNode
}


const BodyComponent = (props: ChildProp) => {
    return (
        <>
        <NormalHeader />
      <main className='flex flex-col min-h-screen bg-[#F7FBFF] relative fam-poppins'>
        <HomeNavbar />
        <div className='grow relative'>
          <div className='absolute bg-[#0056da] inset-x-0 top-0 h-[22vh] z-0'></div>
          <div className='relative px-[5%] py-[3%]'>
            <div className='bg-white min-h-[75vh] rounded-[15px] px-[6%] py-[3%]'>
              {props.children}
            </div>
          </div>
        </div>
      </main>
        </>
    )
}

export default BodyComponent