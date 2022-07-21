
import React from 'react'
import Landingpage from '../header/header';
import About from '../about/about';
import Contact from '../contact/contact';
import Projects from '../portfolio/portfolio';
import Resume from '../resume/resume';
import Blog from '../blog/blog';
import UpdateBlog from '../update/updateblog';
import UpdateProject from '../project/updateproject';
import{Switch,Route}from 'react-router-dom';
import SignUp from '../../pages/signup';
import LogIn from '../../pages/signin';
 const Main = () => {
    return (

        <Switch>
          <Route  path="/signup" component={SignUp} />
           <Route  path="/login" component={LogIn} />
          <Route exact path="/"component={Landingpage}/> 
          <Route  path="/About"component={About}/> 
          <Route  path="/Contact"component={Contact}/>  
          <Route  path="/Project"component={Projects}/> 
          <Route  path="/Resume"component={Resume}/> 
          <Route  path="/Blog"component={Blog}/> 
          <Route exact path="/blogs/:id/edit" component={UpdateBlog} />
          <Route exact path="/projects/:id/edit" component={UpdateProject} />
        </Switch>
    )
}
export default Main;