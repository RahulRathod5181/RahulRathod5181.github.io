import React from 'react'
import style from "./About.module.css"
import leftGif from "../../Images/leftGif.gif"
const About = () => {
  return (
    <div className="about section" id="about">
      <h2 className={style.top}>About Me</h2>
      <div className={style.mainAbout}>
        <div className={style.left}>
          <img src = {leftGif}  alt="gif"></img>
        </div>
        <div className={style.right}>
            <ul>
              <li>Hello my name is Rahul</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
