import React, { Component } from 'react'
import {Grid,Cell}from 'react-mdl';
import Profile from '../image/profile.jpg';
import Education from '../education/education';
import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Footer from '../footer/footer'
class Resume extends Component {
    render() {
        return (
            <div>
             
              <Grid>
              <Cell col={4}>
                  <div style={{textAlign:'center'}}>
                  <img src={Profile}alt="me"style={{height:'250px'}}/>
                  
                  </div>
                  <h2 style={{paddingTop:'2rem'}}>Diana Iminza</h2>
                  <h4 style={{color:'grey'}}>Junior Web Developer</h4>
                  <hr style={{borderTop:'4px solid black',width:'55%'}}/>
                  <p>Am passionate about technology. I do tutor people on the various web development technologies and I would love to bring more females into the technology world.</p>
                  <hr style={{borderTop:'4px solid black',width:'55%'}}/>
                  <h5>Address</h5>
            <p>Royal Park Estate Langata, 589</p>
            <h5>Phone</h5>
            <p>(254) 728131955</p>
            <h5>Email</h5>
            <p>dianaiminza.99@gmail.com</p>
            <h5>Web</h5>
            <p> https://dianaiminza.github.io/Captain/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              </Cell>
              <Cell className="resume-right-col"col={8}>
              <h2>Education</h2>


<Education
  startYear={2017}
  endYear={2021}
  schoolName="Jomo Kenyatta University of Science and Technology"
  schoolDescription="Pursuing bachelor of science in Information Technology"
   />

    <hr style={{borderTop: '3px solid #e22947'}} />

  <h2>Experience</h2>

<Experience
  startYear={2019}
  endYear={2020}
  jobName="First Job"
  jobDescription="Computer Packages Tutor"
  />

  <Experience
    startYear={2020}
    endYear={2021}
    jobName="Second Job"
    jobDescription="Web development mentor at MOI University and web track lead at MMUST"
    />
    <Experience
    startYear={ 2021}
    endYear={2021}
    jobName="Third Job"
    jobDescription="Web development intern at LITTLE CAB"
    />
  <hr style={{borderTop: '3px solid #e22947'}} />
  <h2>Skills</h2>
  <Skills
    skill="javascript"
    progress={80}
    />
    <Skills
      skill="HTML/CSS"
      progress={80}
      />
      <Skills
        skill="NodeJS"
        progress={80}
        />
        <Skills
          skill="React"
          progress={80}
          />

              </Cell>

              </Grid> 
              <Footer/>
            </div>
        )
    }
}
export default Resume;