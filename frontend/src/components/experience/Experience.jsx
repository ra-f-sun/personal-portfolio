import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  return (
    <section id="experience">
        <div className="container">
            <div className="experience-container">
                <h1>My <span>Experience</span></h1>
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="experience-title">
                            <div className="experience-title-left">
                                <FontAwesomeIcon icon={faGoogle} size='2x'/>
                                <p>Lead Software Engineer at Google</p>
                            </div> 
                            <p className='experience-title-right'>Nov 2019 - Present</p>
                        </div>
                        <p className='experience-item-body'>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&apos;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
                    </div>
                    <div className="experience-item">
                        <div className="experience-title">
                            <div className="experience-title-left">
                                <FontAwesomeIcon icon={faYoutube} size='2x'/>
                                <p>Software Engineer at Youtube</p>
                            </div> 
                            <p className='experience-title-right'>Nov 2019 - Present</p>
                        </div>
                        <p className='experience-item-body'>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&apos;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
                    </div>
                    <div className="experience-item">
                        <div className="experience-title">
                            <div className="experience-title-left">
                                <FontAwesomeIcon icon={faApple} size='2x'/>
                                <p>Junior Software Engineer at Apple</p>
                            </div> 
                            <p className='experience-title-right'>Nov 2019 - Present</p>
                        </div>
                        <p className='experience-item-body'>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&apos;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
                    </div>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Experience