import React from 'react'
import Link from 'next/link'
import Dashboard from '@/app/(site)/dashboard/page'
import { Navigation} from '@/app/components'
import LogoWA from '../../public/assets/images/LogoWA.svg'
import Image from 'next/image' 


const Header = () => {
  return (
    <>
    <div className='flex items-center justify-between w-full h-16 bg-stone-700' >
        <Link href="/">
            <Image src={LogoWA}  width='160' height='60' alt='Logo' className='p-3 w-36'/> 
        </Link> 
        <div className='w-2/4'><Navigation/></div>  
        <div className='w-1/4'> <Dashboard/></div>
      
    </div>
    </>
    )
}

export default Header