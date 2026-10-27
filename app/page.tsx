import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div className='flex item-center justify-between px-6 py-4 md:px-10 lg:px-16 '>
        <Link href="/"><Image src='/NeonGhost.png' alt='Neon Ghost' width={80} height={80}/></Link>
      <Navbar/>
    </div>
  )
}

export default page
