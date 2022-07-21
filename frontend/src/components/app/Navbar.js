import React, { Component } from 'react';
import { Collapse, Nav, Navbar,NavbarToggler,NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import AuthenticationService from '../../config/AuthenticationService';
class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
    this.state = {
      showUser: false,
      email:undefined,
      login: false
    };
  }
  signOut = () => {
    AuthenticationService.signOut();
    this.props.history.push('/login');
    window.location.reload();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        {
          this.state.login ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login" onClick={this.signOut}>SignOut</NavLink>
              </NavItem>
            </Nav>                 
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">SignUp</NavLink>
              </NavItem>
              
            </Nav>
          )
        }
      </Collapse>
    </Navbar>;

  }
}

export default withRouter(AppNavbar);