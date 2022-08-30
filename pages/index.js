import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { motion } from "framer-motion"


export default function Home() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)  
  return (
    <div className={styles.container}>
      <Head>
        <title>foodage - Lower your COGS by predicting future demand</title>
        <meta name="description" content="The first integrated platform for material data discovery and management. We cut the time it takes for sustainable material selection by 80%."/>
        <meta property="og:title" content="Find and manage your material data - tuuli"/>
        <meta property="og:description" content="The first integrated platform for material data discovery and management. We cut the time it takes for sustainable material selection by 80%."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topbar}>
          <Image src="/logo.png" width={400} height={135} loading="eager" layout={"fixed"}/>
          <h1 className={styles.toplogo}></h1>
        </div>
        <h1 className={styles.title}>
          Manage material data - like <span className={styles.gradient}> magic</span>
        </h1>

        <p className={styles.description}>
          The easiest way to search, compare, and manage material EPD data.
          
        </p>
        <a href='https://tally.so/r/mBzeQQ' target="_blank" rel="noreferrer">Get early access</a>
        <div className={styles.imagewrapper}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Image 
            src="/screen.png"  
            width={2300}
            height={1598}
            layout={"intrinsic"}
            onLoad={event => {
              const target = event.target;      
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                  setImageIsLoaded(true)
              }
            }}
          />
        </motion.div>
        </div>
      </main>

      <footer className={styles.footer}>
          Copyright © 2022 Tuuli 
      </footer>
    </div>
  )
}
