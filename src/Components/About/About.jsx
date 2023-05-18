import React, { useEffect } from 'react'
import style from "./About.module.css"
import leftGif from "../../Images/leftGif.gif"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="about section" id="about" >
      <div className={style.container}>
      <div className={style.top}>
      <h2 data-aos="fade-left" data-aos-duration="700">About Me</h2>
        <hr data-aos="fade-right" data-aos-duration="700" ></hr>
     
      </div>
      
      <div className={style.mainAbout}>
        <div className={style.left} data-aos="zoom-in" data-aos-duration="1000">
          <img src={leftGif} alt="gif" className='home-img'></img>
        </div>
        <div className={style.right} data-aos="zoom-in" data-aos-duration="1000">
            <ul>
            <li><h2 id="user-detail-intro">A <b>Full Stack Web Developer</b> who can create and
            maintain complex web applications. Proficient in HTML,
            CSS, JavaScript, React, and Node.js, Seeking to launch
            a career in front-end development to create visually
            appealing and user-friendly websites and
            applications that meet client needs.</h2></li>
            <br />
            <li>
            <h2> <b> 1200 Hours</b> Hands on practice of Coding.</h2></li>
            <li>
            <h2>Solved <b>700+ DSA</b> questions.</h2>
            </li>
            <br />
            <li>
            <h2>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then contact me.</h2></li>
            </ul>

        </div>
      </div>
      </div>
    </div>
  )
}

export default About
