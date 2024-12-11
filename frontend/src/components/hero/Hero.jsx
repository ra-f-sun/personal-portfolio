import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>
                        Hello I am, <span>Rafsun Jani</span><br />
                        <span>MERN Stack</span><span className="hollow-text"> Developer</span> <br />
                        Based in <span>Bangladesh</span>
                    </h1>
                    <p>
                        I&apos;m Rafsun Jani Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                    </p>
                    <div className="hero-social">
                        <a href="#">
                            <div className="social-icon">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div> 
                        </a> 
                        <a href="#">
                            <div className="social-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </div> 
                        </a>
                        <a href="#">
                            <div className="social-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </div> 
                        </a>
                        <a href="#">
                            <div className="social-icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div> 
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="./images/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero