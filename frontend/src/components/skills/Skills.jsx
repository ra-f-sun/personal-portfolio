import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faNode, faReact} from '@fortawesome/free-brands-svg-icons'
import {faC, faDatabase, faServer} from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  return (
    <section id="skills">
        <div className="container">
            <div className="skill-container">
                <h1>My <span>Skills</span></h1>
                <div className="skill-list">
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faGitAlt} size='4x'/>
                        <h5>Git</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faJsSquare} size='4x'/>
                        <h5>JavaScript</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faHtml5} size='4x'/>
                        <h5>HTML 5</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faCss3} size='4x'/>
                        <h5>CSS 3</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faBootstrap} size='4x'/>
                        <h5>BootStrap</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faReact} size='4x'/>
                        <h5>React</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faNode} size='4x'/>
                        <h5>Node JS</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faServer} size='4x'/>
                        <h5>Express JS</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faDatabase} size='4x'/>
                        <h5>MongoDB</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faDatabase} size='4x'/>
                        <h5>PostgreSQL</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faJava} size='4x'/>
                        <h5>Java</h5>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faC} size='4x'/>
                        <h5>C</h5>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills