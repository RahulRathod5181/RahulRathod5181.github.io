import React, { useEffect } from 'react'
import styles from "./Projects.module.css"
import { Box, Container, Flex } from '@chakra-ui/react'
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import AOS from 'aos';
// import 'aos/dist/aos.css';
import LimeRoad from "../../Video/LimeRoad.mp4"
import Firstry from "../../Video/Firstcry.mp4"
import Meesho from "../../Video/Meesho.mp4"
import Wrike from "../../Video/Wrike.mp4"
import Reacticon from "../../Images/react.svg"
const Projects = () => {
  const videoUrl = [LimeRoad, Firstry, Meesho, Wrike];

  const projectName = ["Lime Road", "First Cry", "Meesho", "Wrike"]

  const project_desc = ["BeautyHub is an online retailer that sells premium beauty,clinical skincare,and luxury spa products. On this website, I have built Navbar. Signup, and login, I also handled the entire backend for signup and log-in by using JWT."]

  useEffect(()=>{
    AOS.init();
  },[])



  return (
    <div className="projects-projects" id="projects">
      <div className={styles.container}>
      <div className={styles.top}>
        <h2 data-aos="fade-left" data-aos-duration="1000" >My Projects</h2>
        <hr data-aos="fade-right" data-aos-duration="1000"></hr>
      </div>
      
      

      <div className={styles.projectMain}>

        {videoUrl?.map((el, i) => (
          <div className='project-card'>
            <div className={styles.projectCard} data-aos="zoom-in" data-aos-duration="1200">

              <Box
                as='video'
                // controls
                autoPlay
                muted
                loop
                src={el}
                poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
                alt='Big Buck Bunny'
                objectFit='contain'
                sx={{
                  aspectRatio: '16/9'
                }}
                width={"90%"}
                margin={"auto"}
                marginTop={"12px"}
                marginBottom={"10px"}
                borderRadius="15px"
              />
              <p className='project-title'>{projectName[i]} (Clone)</p>
              <p className='project-description'>{project_desc[0]}</p>
                <div className={styles.duration}>
                  <p>Group project: <span style={{ fontWeight: "300" }}>5 Collaborator</span></p>
                  <p>|</p>
                  <p>Duration: <span style={{ fontWeight: "300" }}>5 Days</span></p>
                </div>
                <div className={styles.tech}>

              <p className='project-tech-stack'>Tech Stack: <span style={{ fontWeight: "300",color:"white",}}>Raect JS | CSS | Node JS | Expres JS | Chakra UI</span></p>
              </div>
              
              <div className={styles.linkButton}>
                <div className='project-github-link'>
                  <AiFillGithub size={"32px"} />
                </div>
                <div className='project-deployed-link'>
                  <FiExternalLink  size={"32px"}/>
                </div>
              </div>
            </div>
          </div>

        ))}

        {/* <video width="750" height="500" controls autoPlay muted >
          <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" />
        </video> */}

      </div>
      </div>

    </div>
  )
}

export default Projects
