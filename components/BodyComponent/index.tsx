import { ReactNode } from "react"
import HomeNavbar from "../navbar/HomeNavbar"
type BodyProp = {
    children: ReactNode
}


const BodyComponent = (props: BodyProp) => {
    return (
      <main className='min-h-screen bg-[#F7FBFF] relative fam-poppins'>
        <HomeNavbar />
        <div className='h-full'>
          <div className='absolute bg-[#0056da] inset-x-0 top-0 h-[30vh] z-0'></div>
          <div className='relative pt-[15vh] md:pt-[16vh] px-[5%] py-[3%]'>
            <div className='bg-white min-h-[75vh] rounded-[15px] px-[6%] py-[3%]'>
              {props.children}
            </div>
          </div>
        </div>
      </main>
    )
}

export default BodyComponent