import React, { useEffect } from 'react'
import styles from "./Skills.module.css"
import leftGif from "../../Images/leftGif.gif"
import AOS from 'aos';
import 'aos/dist/aos.css';
import html from "../../Images/html.svg"
import css from "../../Images/css.svg"
import js from "../../Images/javascript.svg";
import react from "../../Images/react.svg";
import chakra from "../../Images/chakraui.png"
import mongo from "../../Images/mongodb.svg";
import mongoose from "../../Images/mongoose.png";
import express from "../../Images/express.svg";
import node from "../../Images/nodejs.svg";
import git from "../../Images/git.svg";
import npm from "../../Images/npm.svg";
import postman from "../../Images/postman.png";
import redux from "../../Images/redux.svg";
import netlify from "../../Images/netlify.png";
import { useColorMode } from '@chakra-ui/react';
import styled from 'styled-components';

const DIV = styled.div`
  
  background-color: ${props => (props.theme === 'light' ? 'white' : "")};;
`

const Skills = () => {

  const logo = [html, css, js, react, chakra, mongo, mongoose, express, node, git, npm, postman, redux, netlify]
  const SkillName = ["HTML", "CSS", "Javascript", "React", "Chakra UI", "Mongo DB", "Mongoose", "Express", "Node JS", "Git", "NPM", "Postman", "Redux", "Netlify"]
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    AOS.init();
  }, [colorMode])
  return (
    <div className="skills-main" id="skills" style={{padding:"4vh",maxWidth:"100%"}}>
      <div className={styles.top}>
        <h2 data-aos="fade-left" data-aos-duration="700">Skills</h2>
        <hr data-aos="fade-right" data-aos-duration="700" ></hr>
      </div>
      <div className='skills-card'>
        <div className={styles.skillcard}>
          {logo?.map((el, i) => (
            <DIV className={styles.singleCard} theme={colorMode} data-aos="zoom-in" data-aos-duration="700" >
              <img src={el} alt={SkillName[i]} className='skills-card-img'></img>
              <p className='skills-card-name'>{SkillName[i]}</p>
            </DIV>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Skills
