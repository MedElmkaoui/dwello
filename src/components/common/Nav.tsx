import { landingPageData } from '@/lib/const'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Btn from './Btn'

function Nav() {
    const navData = landingPageData.header
  return (
    <nav className='h-[64px] flex items-end justify-between'>
        <Image 
            src={navData.logo}
            alt='Logo'
            width={100}
            height={50} 
        /> 
       

        <ul className='hidden md:flex gap-8 items-center'>
            {
                navData.navigation.map((navItem)=> (
                    <li key={navItem} className='text-[15px] font-bold text-primary'>
                        <Link href={`/${navItem}`}>
                            {navItem}
                        </Link>
                    </li>
                ) )
            }
        </ul>

        <div className='flex gap-8 items-center'>
            <Image 
                src={navData.searchIcon}
                alt='Logo'
                width={15}
                height={15} 
            />
            <Image 
                src={navData.userIcon}
                alt='Logo'
                width={15}
                height={15} 
            /> 
            <Btn label={navData.signupBtn} />
        </div>
    </nav>
  )
}

export default Nav
