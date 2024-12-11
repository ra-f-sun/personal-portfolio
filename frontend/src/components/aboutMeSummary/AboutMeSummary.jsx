import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const AboutMeSummary = () => {
  return (
    <section id="about-me-summary">
        <div className="container">
            <div className="about-summary-container">
               <h1>About <span>Me</span></h1> 
               <div className="about-summary-content">
                    <div className="about-summary-left">
                        <img src="./images/about-img.png" alt="" />  
                    </div>
                    <div className="about-summary-right">
                        <h3>Myself</h3>
                        <p>I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                        <p>I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                        <p>When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                        <a href="/about"><button className="btn">To know more <FontAwesomeIcon icon={faArrowRight} /></button></a>
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMeSummary