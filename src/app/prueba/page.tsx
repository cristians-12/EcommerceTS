'use client'
import React, { useEffect, useState } from 'react'

async function getData() {
    const res = await fetch('https://api.chucknorris.io/jokes/random', {cache: 'force-cache'})
    return res.json()
}

const Prueba = () => {
const [data, setData] = useState();
    useEffect(()=>{
        
    },[])

    return (

        <div>
            {data.value}
        </div>
    )
}

export default Prueba