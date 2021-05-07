// import React, { Component } from 'react'
// import {List,ListItem,ListItemContent}from 'react-mdl';

//  class Contact extends Component {
//     render() {
//         return (
//            <div className="contact-body">
//              {/* <AppNavbar/> */}
//                <h2>Contact Me</h2>
//                <hr/>
//                <div className="contact-list">
//                <List>
//   <ListItem>
//     <ListItemContent style={{fontSize:'40px',fontFamily:'Antom'}}>
//     <i className="fa fa-phone-square"aria-hidden="true"/>
//     {254}728131955
//     </ListItemContent>
//   </ListItem>
//   <ListItem>
//     <ListItemContent style={{fontSize:'40px',fontFamily:'Antom'}}>
//      <i className="fa fa-envelope"aria-hidden="true"/>
//     dianaiminza.99@gmail.com  
//     </ListItemContent>
//   </ListItem>
  
// </List>
//            </div>
          
//            </div>
//         )
//     }
// }
// export default Contact;

import React from 'react'

export default function footer() {
    return (
        <div className="site-footer">
<div className="container">
<div className="row">
<div className="col-lg-3">
<div className="widget">
<h3>Skills</h3>
<ul className="list-unstyled float-left links">
<strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
</ul>
</div> 
</div> 
<div className="col-lg-3">
<div className="widget">
<h3>Projects</h3>
<ul className="list-unstyled float-left links">
<li><a href="https://github.com/Dianaiminza/FileUpload">FileUpload</a></li>
<li><a href="https://dianaiminza.github.io/Budget/">Budget</a></li>
<li><a href="https://github.com/Dianaiminza/Soko">Soko</a></li>
<li><a href="https://github.com/Dianaiminza/kicks">Kicks</a></li>

</ul>
</div> 
</div> 
<div className="col-lg-3">
<div className="widget">
<h3>Libraries</h3>
<ul className="list-unstyled float-left links">

          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Material-ui</li>
          <li>React.js</li>
</ul>
</div> 
</div> 
<div className="col-lg-3">
<div className="widget">
<h3>Contact</h3>
<address>Royal Park Langata 589, Nairobi</address>
<ul className="list-unstyled links mb-4">
<li><a href="tel://0728131955">+25428131955</a></li>

<li><a href="mailto://dianaiminza.99@gmail.com">[dianaiminza.99@gmail.com]</a></li>
</ul>
<h3>Connect</h3>
<ul className="list-unstyled social">
<li><a href="https://github.com/Dianaiminza"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-github-square"aria-hidden="true"/>
</a></li>
<li><a href="https://twitter.com/captainiminza"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-twitter-square"aria-hidden="true"/>
</a></li>

<li><a href="https://www.linkedin.com/in/diana-iminza/"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-linkedin-square"aria-hidden="true"/>
</a></li>
</ul>
</div> 
</div> 
</div> 
<div className="row mt-5">
<div className="col-12 text-center">
<p>

Copyright &copy;<script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved  <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://captain.com" target="_blank"rel="noreferrer">Captain</a>
</p>
</div>
</div>
</div> 
</div> 
    )
}

