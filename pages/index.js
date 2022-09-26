import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div id={styles.container}>
      <Head>
        <title>Patrick</title>
        <meta name="description" content="my personal website"/>
        <meta name="author" content="Patrick Chukwudifu"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id={styles.wrapper} className={styles.section}>
        
        <div id={styles.container}>
            <h1 id={styles.userName}>Patrick Chukwudifu</h1>
            <p id={styles.bio}>I am an experienced web developer with expertise in creating scalable software. I love working on products to accelerate the growth of businesses. I am passionate about solving technical and complex problems</p>
            <p id={styles.email}><Image src="/gmail.svg" alt="site logo" width={20} height={20} /> patoski716@gmail.com</p>
        </div> 
      
      </section>

      <section className={styles.section}>
        <div id={styles.socials}>
            <a href="https://www.linkedin.com/in/patrick-chukwudifu-736806220/"><Image src="/Linkedin.svg" alt="site logo" width={30} height={30} /><br/>Linkedin</a>
            <a href="https://github.com/patoski716"><Image src="/github.svg" alt="site logo" width={30} height={30} /><br/>Github</a>
            <a href="/Resume.pdf"><Image src="/download.svg" alt="site logo" width={30} height={30} /><br/>Download Resume</a>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Skills & Qualifications</h2>
        <ul id={styles.qualifications}>
            <li>✔️ 2 Year experience with Web Development</li>
            <li>✔️ Extensive knowledge in API & Database Design</li>
        </ul>
      </section>

    <section className={styles.section}>
      <h2>Tech stack</h2>

      <div id={styles.wrapperTechstack}>
          <div className={styles.cardTechstack}><span>Python, JavaScript</span></div>
          <div className={styles.cardTechstack}><span>Django</span></div>
          <div className={styles.cardTechstack}><span>React</span></div>
          <div className={styles.cardTechstack}><span>Vue js</span></div>
      </div>
    </section>

    <section id={styles.workHistoryWrapper} className={styles.section}>
      <h2>Work History</h2>
      <div className={styles.lineBreak}></div>
      <div className={styles.cardWorkHistory}>
          <strong>🚧 DEVELOPER ADVOCATE | POMONEWS24.COM</strong>
          <p>09/2022 - Present</p>
          <p>I design and develop the official website and also improve the SEO.</p>
          
      </div>
    </section>

    <section className={styles.section}>
      <h2>Projects & Accomplishments</h2>
      <div className={styles.cardProject}>
          <a href="https://pomonews24.com"><span>🏆 </span>Built an online news portal management system for pomonews24</a> &#8594;

          <div id={styles.technology}>

          <Image src="/django.svg" alt="site logo" width={30} height={30} />
          
          </div>
             
      </div>

      <div className={styles.cardProject}>
          <a href="https://goalcard.netlify.app"><span>🏆 </span>Built a Goal management system - open source project </a> &#8594;

          <div id={styles.technology}>

          <Image src="/vue.svg" alt="site logo" width={30} height={30} />

          <Image src="/django.svg" alt="site logo" width={30} height={30} />
          
          </div>
             
      </div>

      <div className={styles.cardProject}>
          <a href="https://sanity-career.netlify.app/"><span>🏆 </span>Built a Career path couselling system - open source project </a> &#8594;

          <div id={styles.technology}>

          <Image src="/react.svg" alt="site logo" width={30} height={30} />

          <Image src="/sanity.svg" alt="site logo" width={30} height={30} />       
          
          </div>
             
      </div>


      <div className={styles.cardProject}>
          <a href="https://promanagers.netlify.app/"><span>🏆 </span>Built a Project manager system - open source project </a> &#8594;

          <div id={styles.technology}>

          <Image src="/react.svg" alt="site logo" width={30} height={30} />

          <Image src="/redux.svg" alt="site logo" width={30} height={30} />

          <Image src="/django.svg" alt="site logo" width={30} height={30} />
         
          
          </div>
             
      </div>

      
      <div className={styles.cardProject}>
          <a href="https://github.com/patoski716/Netflix-clone-with-astro"><span>🏆 </span>Built a Netlify Landing Page - open source project </a> &#8594;

          <div id={styles.technology}>

          <Image src="/astro.png" alt="site logo" width={30} height={30} />

         
          
          </div>
             
      </div>
    </section>

    </div>
  )
}
