import { landingPageData } from '@/lib/const'
import Image from 'next/image'
import React from 'react'
import Btn from '../common/Btn'

function Popular() {
    const popular = landingPageData.popular
  return (
    <div className='my-12 space-y-12'>
        <h1 className='text-4xl text-center font-bold text-primary'>{popular.title}</h1>
        <div className=' grid lg:grid-cols-3 gap-8'>
            {
                popular.residences.map((ele)=> (
                    <div className='bg-secondary rounded-2xl'>
                        <Image
                            src={ele.image}
                            alt='image'
                            width={450}
                            height={150}
                            className='rounded-t-2xl w-[100%]'
                        />
                        <div className='p-6 space-y-8'>
                            <div className='flex gap-3.5'>
                                <Image
                                    src={'/icon/location-1.png'}
                                    alt='image'
                                    width={25}
                                    height={35}
                                    className='rounded-t-2xl'
                                />
                                <h3 className='font-bold text-lg text-primary'>{ele.location}</h3>
                            </div>
                            <div className='w-[80%] flex justify-between items-center'>
                                <div className='flex gap-2.5 items-center'>
                                    <Image
                                        src={'/icon/room.png'}
                                        alt='image'
                                        width={30}
                                        height={30}
                                        className='rounded-sm bg-light'
                                    />
                                    <span>{ele.rooms} Rooms</span>
                                </div>
                                <div className='flex gap-2.5 items-center'>
                                    <Image
                                        src={'/icon/erea.png'}
                                        alt='image'
                                        width={30}
                                        height={30}
                                        className='rounded-sm bg-light'
                                    />
                                    <span>{ele.eria} sq ft</span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <Btn label='Sing up' className='py-2.5' />
                                <h2 className='text-xl text-primary font-bold'>{ele.price}</h2>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Popular
