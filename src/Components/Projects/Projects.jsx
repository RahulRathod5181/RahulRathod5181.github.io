import React, { useEffect } from 'react'
import styles from "./Projects.module.css"
import { Box, Container, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
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

  const { colorMode, toggleColorMode } = useColorMode();

  // console.log(colorMode);



  const projectName = ["Fashion Road", "First Cry", "Meesho", "Wrike"]
  const projectType = ["group","group","solo","solo"];
  const gitLink = ["https://github.com/RahulRathod5181/Fashion-Road","https://github.com/RahulRathod5181/FirstCry","https://github.com/RahulRathod5181/Meesho","https://github.com/RahulRathod5181/Wrike"];
  const depLink = ["https://fashionroad-animesh-0041.vercel.app/","https://incandescent-basbousa-3e7c6e.netlify.app/","https://meeshon.netlify.app/","https://brilliant-sunflower-a2dad1.netlify.app/"];
  const project_desc = ["Fashion Road is a cloned website of Limeroad, it is E-Commerce platform. It focuses on clothing and accessories for women, men and kids.","This is the cloned Website of FirstCry.com, which is an Asia's Favorite Kids and Baby's Shopping Plateform, Other Objective Of making, is to check our knowledge of HTML,CSS and Js","Meeshon is cloned website of Meeso, is an E-commerce Website which offers great deals in lowest price and trusted by Resellers","Trackio is cloned website of Wrike, is a project management and team collaboration application service provider"]

  const techStack = ["React | React Redux | Node.Js | MongoDB | Chakra UI","HTML | CSS | Javascript | JSON Server","React | Chakra UI | Json Server | JS | CSS","HTML | CSS | Javascript"]


  const handleGit = (i)=>{
    window.open(gitLink[i])
  }
  const handleDep = (i)=>{
    window.open(depLink[i])
  }

  useEffect(()=>{
    AOS.init();
  },[])





  return (
    <div className="projects-projects" id="projects"  style={{maxWidth:"100%"}}>
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
              <p className='project-description'>{project_desc[i]}</p>
                <div className={styles.duration}>
                  {projectType[i]=="group"?(<p>Group project: <span style={{ fontWeight: "300" }}>5 Collaborator</span></p>):(<p>Solo project</p>)}
                  
                  <p>|</p>
                  <p>Duration: <span style={{ fontWeight: "300" }}>5 Days</span></p>
                </div>
                <div className={styles.tech}>

              <p className='project-tech-stack'>Tech Stack: <span style={{ fontWeight: "300",color:"white",}}>{techStack[i]}</span></p>
              </div>
              
              <div className={styles.linkButton}>
                <div className='project-github-link' onClick={()=>handleGit(i)}>
                  <AiFillGithub size={"32px"} />
                </div>
                <div className='project-deployed-link' onClick={()=>handleDep(i)}>
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
