import React, { Component } from 'react'
import{Switch,Route}from 'react-router-dom';
import LogIn from '../../pages/signin';
import Projects from '../portfolio/portfolio';
export default class About extends Component {
      state={
  isLog:false
 }
 handleLogin=(isLog)=>this.setState({isLog})
    
    render() {
        const {isLog}=this.state;
        return (
            
            <div>
                <Switch>
  <Route  path="/login" component={LogIn} /> 
                        {
               !isLog ?
              <Route exact path='/' render={() => <LogIn isLogin={this.handleLogin}/>}/>
                :
              <Route path='/projects' render={() => <Projects handleLogged={this.handleLogin}/> }/>
            } 
            </Switch>
            </div>
        )
    }
}
