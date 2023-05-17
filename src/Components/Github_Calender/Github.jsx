import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import styles from "./Github.module.css"

const Github = () => {
  
  return (
    <div >
      <div className={styles.top}>
        <h2 data-aos="fade-left" data-aos-duration="700">Github Overview</h2>
        <hr data-aos="fade-right" data-aos-duration="700" ></hr>
      </div>
      <div className={styles.main}>
        <div className={styles.calender}>
          <GitHubCalendar
            username='RahulRathod5181'
          // fontSize={"16px"}
            className="react-activity-calendar"
            blockMargin={11}
            blockSize={11}
          />
        </div>
        <div className={styles.stats}>
          <div id="stats">
            <img src="https://github-readme-stats.vercel.app/api?username=RahulRathod5181&show_icons=true&locale=en&theme=tokyonight"  id='github-stats-card'></img>
          </div>

          <div>

            <img src="https://github-readme-streak-stats.herokuapp.com/?user=rahulrathod5181&show_icons=true&locale=en&theme=tokyonight" id='github-streak-stats'></img>
          </div>
        </div>
        {/* <div className={styles.streak}>
        </div> */}
        <div className={styles.lang}>
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=rahulrathod5181&show_icons=true&locale=en&layout=compact&theme=tokyonight" id='github-top-langs'></img>
        </div>
      </div>
    </div>
  )
}

export default Github
