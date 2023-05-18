import React from 'react'
import styles from "./Contact.module.css"
import ContactGif from "../../Images/ContactBG.png"
import { ImLinkedin } from "react-icons/im"
import { AiFillGithub } from "react-icons/ai"
import { RiMailFill } from "react-icons/ri"
import { BiPhoneCall } from "react-icons/bi"
import {Form} from "./Form"
const Contact = () => {

  const handleLink = (link)=>{
    window.open(link);
  }
  return (
    <div className="contact-main" id="contact">
      <div className={styles.top}>
        <h2 data-aos="fade-left" data-aos-duration="800" >Contact Me</h2>
        <hr data-aos="fade-right" data-aos-duration="800"></hr>
      </div>
      <div className={styles.contactMain}>
          <div>
            <img src={ContactGif} alt="contact"></img>
          </div>
          <div className={styles.contactRight}>

            <div className={styles.allContact}>
                <div onClick={()=>handleLink("https://www.linkedin.com/in/rahul5181/")}>
                    <ImLinkedin id='contact-linkedin' size={"18px"}/>
                    <p>Linkedin</p>
                </div>
                <div onClick={()=>handleLink("https://github.com/RahulRathod5181")}>
                    <AiFillGithub id="contact-github" size={"20px"}/> 
                    <p>Github</p>
                </div>
                {/* <div id="contact-email">
                    <RiMailFill id="contact-email" size={"18px"} /> 
                    <p>Gmail</p>
                </div>
                <div id="contact-phone">
                    <BiPhoneCall id="contact-email" size={"18px"}/>
                </div> */}
            </div>
            <div className={styles.getTouch}>
              <p>Get In <span style={{color:"#4bc0c8"}}>Touch</span></p>
            </div>
            <div className={styles.directContact}>
              <div>
              <RiMailFill id="contact-email" size={"27px"}  />
              <p>: rahulrathod5181@gmail.com</p> 
              </div>
              <div>
              <BiPhoneCall id="contact-email" size={"27px"}/>
              <p>: +919650915181</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
