import React from 'react'
import styled from 'styled-components'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'
import style from "./Home.module.css"
import { ImLinkedin } from "react-icons/im"
import { AiFillGithub } from "react-icons/ai"
import { RiMailFill } from "react-icons/ri"
import { BiPhoneCall } from "react-icons/bi"
import { BsEyeFill } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { Link } from '@chakra-ui/react'


const Home = () => {

  // const {text} = useTypewriter({
  //   words:['Full Stack Developer','designer'],
  //   loop:{},
  // });
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="home-main" id="home">
      <div className={style.home} >
        <div className={style.left}>
          {/* ============upper name=========== */}
          <div className={style.UpperName} id="user-detail-name" >
            <h1>Hello</h1>
            <img src={"https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"}></img>
            <h1>, My Name is</h1>
          </div>
          <div className={style.mainName}>
            <h1>Rahul</h1>
          </div>
          <div>
            <h1 style={{  fontWeight: "bold", fontSize: "30px" }}>
              I'm a
              <span style={{ fontWeight: "bold", color: "rgb(255 152 56)" }}>
                <Typewriter
                  words={[' Fullstack Developer.']}
                  loop={Infinity}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={80}
                  delaySpeed={2000}
                />
              </span>
            </h1>
          </div>
          {/* ====================social========================== */}
          <div className={style.social}>
            <div>
              <a>
                <ImLinkedin />
              </a>
            </div>
            <div>
              <a>
                <AiFillGithub />
              </a>
            </div>
            <div>
              <a>
                <RiMailFill />
              </a>
            </div>
            <div>
              <a>
                <BiPhoneCall />
              </a>
            </div>

          </div>
          <div className={style.resume2}>
            <div  onClick={() =>
                  openLink(
                    "https://drive.google.com/file/d/1oUG0-EfArwMZ74GxSaxT9QKL8VYQdoK1/view?usp=share_link"
                  )}>
              <p>Resume</p>
              <BsEyeFill/>
            </div>
            <Link href=""
              className="home-resume"
              id="resume-button-2"
              // download = {rahul_resume}
              download = "Rahul_Resume.pdf"> 
            <div className={style.download2}>
              <HiDownload />
            </div>
            </Link>
          </div>
        </div>
        <div className={style.right}>
        </div>
      </div>
    </div>
  )
}

export default Home;
