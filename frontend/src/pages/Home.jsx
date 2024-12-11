import { Fragment } from "react"
import Hero from "../components/hero/Hero"
import Skills from "../components/skills/Skills"
import Experience from "../components/experience/Experience"
import AboutMeSummary from "../components/aboutMeSummary/AboutMeSummary"
import MyProjects from "../components/myProjects/MyProjects"
import Testimonial from "../components/testimonial/Testimonial"

const Home = () => {
  return (
    <Fragment>
      <Hero/>
      <Skills/>
      <Experience/>
      <AboutMeSummary/>
      <MyProjects/>
      <Testimonial/>
    </Fragment>
  )
}

export default Home