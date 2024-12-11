const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-container">
          <a href="/">
            <picture>
                <img src="./images/logo-icon-invert.png" alt="" />
                <div className="logo-text">Personal</div>
            </picture>
          </a>
          <div className="copyright">
            <p>&copy; All rights reserved by Rafsun Jani</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer