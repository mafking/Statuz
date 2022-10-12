import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Navbar from '../components/navbar.js'
import Chat from '../components/chat.js'
import compStyles from '../components/navbar.module.css'
import gtb from '../public/banks/gtb.png'
import fcmb from '../public/banks/fcmb.png'
import one from '../public/banks/one.png'
import first from '../public/banks/first.png'
import img1 from '../public/random/1.jpg'
import img2 from '../public/random/3.jpg'
import img3 from '../public/random/4.png'
import img4 from '../public/random/6.jpg'
export default function Home() {
  const nav=React.useRef(false)
  const bar=React.useRef()
  const [navState,setNavState]=React.useState(false)
  const [demo, setDemo]=React.useState('Try Demo')
  const [query, setQuery]=React.useState(0)
  
  //var bar=document.querySelector('.motherBar')
  function barToogle(){
   bar.current.classList.toggle(`${styles.change}`)
   navState?setNavState(false):setNavState(true)
   console.log(bar.current.classList)
   //alert('a')
  }
  
  
 // bar.current.addEventListener('click',()=>barToogle())
  return (
    <div>
    <Head>
       <title>Statuz</title>
    </Head>
    <header className={styles.header}>
    <i className={`bi-exclude ${styles.logo}`} ></i>
    <span>Statuz</span>
    <div className={styles.motherBar} onClick ={()=>barToogle()} ref={bar}>
    <div className={styles.bar1}></div>
    <div className={styles.bar2}></div>
    <div className={styles.bar3}></div>
    </div>
    </header>
    <div class={styles.introPage}>
    <div>
      <span>Investigate Your transactions with <span class={styles.statuz}>Statuz</span></span>
      <p>crosscheck the existence,integrity and the status of your transactions in seconds</p>
      <button onClick={()=>demo==='Try Demo'?setDemo('🥴'):setDemo('Try Demo')
      } >{demo} </button>
      </div>
      <div class={styles.banks}><p class={styles.borderup}>Trusted by Nigerian Most popular banks</p>
      <div><Image class={styles.img} src={gtb} height={20} width={20}/> <Image class={styles.img} src={one} height={20} width={20}/> <Image class={styles.img} src={fcmb} height={20} width={20}/>&nbsp;
      <Image class={styles.img} src={first} height={20} width={20}/> </div>
      </div>
      <div class={styles.last}>
    <i className={`bi-exclude ${styles.logo}`}></i>
      </div>
    </div>
    {navState && <Navbar/>}
    <main>
       <div class={styles.statuz1}>
           <div> 
           <h2>Track your money</h2>
           <p>put trackers on your transactions and know exactly where your money is</p>
           <Image src={img1} class={styles.img} width={150} height={100} layout='responsive' />
           
           <p></p>
           </div>
           <div class={styles.extended}>
            <h2>Fake Receipts?</h2>
           <p>Check if a transaction ever existed,all you need is the transaction ID</p>
           <Image src={img3} class={styles.img} width={150} height={100} layout='responsive' /> 
           </div>
       </div>
        <div class={styles.statuz1}>
           <div> 
           <h2>Hanging Transactions?</h2>
           <p>Set Alerts and receive notifications when your money reach its destination</p>
           <Image src={img2} class={styles.img} width={150} height={100} layout='responsive' />
           
           <p></p>
           </div>
           <div class={styles.extended}>
            <h2>Be one step ahead</h2>
           <p>Check pending transactions that are likely to be successful or fail</p>
           <Image src={img4} class={styles.img} width={150} height={100} layout='responsive' /> 
           </div>
       </div>
       <div class={styles.blackFlex}>
       <div class={styles.heading}>
     <h1>Banks never reply until its too late</h1>
     </div>
     <div class={styles.box1}>
             <Chat className={styles.cha} message='hello' color='white' />
              <Chat className={styles.cha} message='can you confirm a transaction of 1.2m that a client claimed to have sent? ' color='white' />
               <Chat message="hey please it's urgent" color='white' />
                <Chat message='hellooo are you there😢 arrgh' color='white' />
       </div>
    </div>
    <div class={styles.redFlex}>
       <div class={styles.heading}>
     <h1>And Sometimes When They Do</h1>
     </div>
        <div class={styles.box1}>
         <Chat message='hello' color='white' />
          <Chat message='one of your customers claimed to have sent 10k to my River Bank account' color='white' />
            <Chat message='i just needed to know if she did make the transfer, I suspect she is lying and trying to scam me' color='white' />
           <Chat message='kindly note that your issue has been escalated and we recommend you communicate with our customer to contact us for resolution.Thank you' text='white' color='black' />
        </div>
    </div>
    <div class={styles.rescue} >
       <div><h1>With Statuz</h1></div>
       <div className={styles.input}>
       <label>Transaction ID:</label><br/><br />
       <input type='text' value='20442720613116677954'/><br/><br />
       <center><button type='submit' onClick ={()=>setQuery(1)} >Check Statuz</button></center>
       </div>
       <div style={{opacity:query}} class={styles.query}>
          <div> Bank A</div>
          <div><i style={{color:'red'}}class="bi-geo-alt-fill"></i>NIBSS</div>
          <div>Bank B</div>
       </div><br/>
       <div className={styles.free} style={{opacity:query}} >
       <h1>And its almost Free! </h1>
       </div>
    </div>
    <div className={styles.footer}>
     <div><h3>Contact</h3>
      <i class="bi-twitter"></i>
      <i class="bi-facebook"></i>
      <i class="bi-instagram"></i>
      <p><strong>Lagos</strong></p>
      <p>126 round-about Junction,<br/>
      Ikeja GRA, Ikeja,<br/>
      Lagos, Nigeria</p>
     </div>
     <div><h3>Products</h3>
     <p>-Value Tracker<br/>
        -investgator<br/>
        -status resolve
     </p>
     </div>
    </div>
   <div className={styles.copy}>&copy; Statuz 2022 </div>
    </main>
    </div>
  )
}
