import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="testimonial-container">
          <h1>My <span>Testimonial</span></h1>
          <div className="testimonial-list">
            <div className="testimonial-card">
              <div className="testimonial-card-img-box">
                <div className="testimonial-card-img">
                  <img src="./images/test1.png" alt="" />
                </div>
                <div className="quote">
                  <FontAwesomeIcon icon={faQuoteRight} size='1.5x'/>
                </div>
              </div>
              <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
              <div className="horizontal-line"></div>
              <h4>Rafsun Jani</h4>
              <h5>Developer</h5>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card-img-box">
                <div className="testimonial-card-img">
                  <img src="./images/test2.png" alt="" />
                </div>
                <div className="quote">
                  <FontAwesomeIcon icon={faQuoteRight} size='1.5x'/>
                </div>
              </div>
              <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
              <div className="horizontal-line"></div>
              <h4>Florence Nightingle</h4>
              <h5>Developer</h5>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card-img-box">
                <div className="testimonial-card-img">
                  <img src="./images/test1.png" alt="" />
                </div>
                <div className="quote">
                  <FontAwesomeIcon icon={faQuoteRight} size='1.5x'/>
                </div>
              </div>
              <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
              <div className="horizontal-line"></div>
              <h4>Rafsun Jani</h4>
              <h5>Developer</h5>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial