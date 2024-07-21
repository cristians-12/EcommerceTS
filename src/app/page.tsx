import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-[40px]'>Ecommerce</h1>
      <p>Si</p>
      <Image alt='Hola' src='https://pbs.twimg.com/media/GS3WVdvbkAAifC3?format=jpg&name=4096x4096' width={800} height={300} />
    </div>
  )
}

export default Home