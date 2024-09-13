import { landingPageData } from '@/lib/const'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    const footer = landingPageData.footer
  return (
    <div className='mt-12 bg-secondary py-24' >
        <div className='w-[90%] lg:w-[80%] mx-auto grid gap-12 lg:grid-cols-4 '>
            <div className='space-y-5'>
                <Image 
                    src={'/logo.png'}
                    alt=''
                    width={100}
                    height={25}
                    className=''
                />
                <p>
                    {footer.description}
                </p>
            </div>
            {
                footer.sections.map((ele, idx)=> ( 
                    <div key={idx} className='space-y-3.5'>
                        <h2 className='text-xl font-semibold'>{ele.title}</h2>
                        <ul className='space-y-3 text-sm'>
                            {
                                ele.links?.map((item)=> (
                                    <li key={item}><Link  href={`/${item}`} >{item}</Link></li>
                                ))
                            }
                            
                        </ul>
                    </div>
                ))
            }
            <div className='space-y-3.5'>
                <h2 className='text-xl font-semibold'>{footer.info.title}</h2>
                <ul className='space-y-3 text-sm '>
                    {
                        footer.info.info?.map((item, idx)=> (
                            <li key={idx}><Link  href={`/${item}`} >{item}</Link></li>
                        ))
                    }        
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer