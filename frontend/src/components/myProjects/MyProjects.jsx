const MyProjects = () => {
  return (
    <section id="my-projects">
      <div className="container">
        <div className="my-project-container">
          <h1>My <span>projects</span></h1>
          <div className="my-project-list">
            <div className="my-project-item">
              <div className="my-project-mock-image">
                <img src="./images/project1.png" alt="" />
              </div>
              <div className="my-project-mock-details">
                <h1><span>01</span></h1>
                <h3>Crypto Screener Application</h3>
                <p>I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              </div>
            </div>
            <div className="my-project-item">
              <div className="my-project-mock-details">
                <h1><span>02</span></h1>
                <h3>ecommerce</h3>
                <p>I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              </div>
              <div className="my-project-mock-image">
                <img src="./images/project2.png" alt="" />
              </div>
              
            </div>
            <div className="my-project-item">
              <div className="my-project-mock-image">
                <img src="./images/project3.png" alt="" />
              </div>
              <div className="my-project-mock-details">
                <h1><span>03</span></h1>
                <h3>blog site</h3>
                <p>I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              </div>
            </div>
          </div>
          <a href="/projects"><button className="btn">View More</button></a>
        </div>
      </div>
    </section>
  )
}

export default MyProjects