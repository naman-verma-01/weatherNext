import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [city, setCity] = useState('Test')
  return (
    <div style={{display:'flex', justifyContent:"center", alignItems:'center', height:'100vh', width:'100vw'}}>
      <div style={{width:"50vw"}} className='inputForm'>
        <input onChange={(e) => setCity(e.target.value)}></input>
        <br /> <button onClick={() => { router.replace(`${city}`); }}><span>Search</span></button>
      </div>
    </div>

  )
}
