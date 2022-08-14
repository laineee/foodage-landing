import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tuuli - Find and manage your material data</title>
        <meta name="description" content="The first integrated platform for material data discovery and management. We cut the time it takes for sustainable material selection by 80%."/>
        <meta property="og:title" content="Find and manage your material data - tuuli"/>
        <meta property="og:description" content="The first integrated platform for material data discovery and management. We cut the time it takes for sustainable material selection by 80%."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.toplogo}>tuuli</h1>
        <h1 className={styles.title}>
          Manage material data - like <span className={styles.gradient}> magic</span>
        </h1>

        <p className={styles.description}>
          The easiest way to search, compare, and manage material EPD data.
          
        </p>
        <a href='https://tally.so/r/mBzeQQ' target="_blank" rel="noreferrer">Get early access</a>
        <div className={styles.imagewrapper}>
        <Image 
          src="/screen.png"  
          width={2300}
          height={1598}
          layout={"intrinsic"}
        />
        </div>
      </main>

      <footer className={styles.footer}>
          Copyright © 2022 Tuuli 
      </footer>
    </div>
  )
}
