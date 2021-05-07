
import React, { useState, useEffect } from 'react';
import { Cell, Grid } from 'react-mdl'
import Profile from '../image/profile.jpg';

import axios from 'axios';

function LandingPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:5000/me`)
      .then((res) => {
        console.log(res.data)
        setUser(res.data);
      })
  }, 
  
  []);
  
  if (!user) {
    return <div />;
  }
          return (
            
            <div style={{width:'100%',margin:'auto'}}>
              
               <Grid className="landing-grid">
               <Cell col={12}>
              <img src={Profile}alt="me" className="profile"/>
              <div className="barner-text">
              <h1>{user.Name}</h1>        
<h1>{user.description}</h1>
<hr/>

<p>{user.skills}</p>
<div className="social-links">
{/*github*/}
<a href="https://github.com/Dianaiminza"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-github-square"aria-hidden="true"/>
</a>
{/* {twitter} */}
<a href="https://twitter.com/captainiminza"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-twitter-square"aria-hidden="true"/>
</a>
{/*linkedln*/}
<a href="https://www.linkedin.com/in/diana-iminza/"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-linkedin-square"aria-hidden="true"/>
</a>
</div>

              </div>
              </Cell>
               </Grid> 
               
            </div>
            
        )
 
}

export default LandingPage;
