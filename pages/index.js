import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
    <div className={styles.header}>
    </div>
    <div className='text--area'>
      <h3>SO YOU WANT TO TRAVEL TO</h3>
      <br/>
      <span className='bold--text'>SPACE</span>
      <br/>
      <h5>Lets face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of the world experience.</h5>
    </div>
    <div className='explore--circle'>EXPLORE</div>
  </>
  
  )
}
