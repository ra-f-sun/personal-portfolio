import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav-container">
                <a href="/">
                  <picture>
                      <img src="./images/logo-icon.png" alt="" />
                      <div className="logo-text">Picture</div>
                  </picture>
                </a>
                <div className="menu-container">
                    <ul>
                      <li><a href="/">home</a></li>
                      <li><a href="/blog">blog</a></li>
                      <li><a href="/projects">projects</a></li>
                      <li><a href="/about">about me</a></li>
                      <li><a href="/contact">contact me</a></li>
                    </ul>
                </div>
                <button className="btn">Resume <FontAwesomeIcon icon={faDownload} /></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar