
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import{Redirect}from 'react-router-dom';
function Login(props) {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin.userInfo);
  const dispatch = useDispatch();
  console.log({userSignin})
  // const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    // if (userSignin) {
    //   props.history.push(redirect);
    // }
    
    return () => {
      //
    };
  },);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }
   
  return <div className="form">
    {userSignin?.user ? <Redirect to='/'/> : <div> { 
    <form onSubmit={submitHandler} >
    <ul className="form-container">
      <li>
        <h2>Sign-In {userSignin}</h2>
      </li>
      <li>
        <label htmlFor="email">
          Email
        </label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
        </input>
      </li>
      <li>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
        </input>
      </li>
      <li>
        <button type="submit" className="button primary">Login</button>
      </li>
    </ul>
  </form>

    } </div> }
  </div>
}
export default Login;


// import React, { Component } from 'react';
// import { Container } from 'reactstrap';
// import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
// import {Button} from 'react-bootstrap';

// import AuthenticationService from '../config/AuthenticationService';
// const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//  const[log,setLog]=useState(false)
// class Login extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       email: "",
//       password: "",
//       error: ""
//     };
//     this.changeHandler = this.changeHandler.bind(this);
//   this.doLogin = this.doLogin.bind(this);
//   }
// useEffect(() => {
//   axios.get(`http://localhost:5000/signin`)
//     .then((res) => {
//       console.log(res.data)
//        setLog(res.data);
//     })
// }, 
// []);
//   changeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     this.setState({[nam]: val});
//   }
  

//   doLogin = async (event) => {
//     event.preventDefault();
   
//     AuthenticationService
//         .signin(this.state.email, 
//                   this.state.password)
//       .then(
//         (response) => {
//         // console.log(response)
//         // this.props.isLogin();
//         //   console.log(this.props)
//           // this.props.history.push('/');
//         })
//         .catch(error => {
//           console.log("Login fail: error = { " + error.toString() + " }");
//           this.setState({error: "Can not signin successfully ! Please check email/password again"});
//         })
        
//   }
  
//   render() {
//     return ( 
//       <div>
//         <Container fluid>
//           <Row style={{marginTop:"20px"}}>
//           <Col sm="12" md={{ size: 80, offset: 4}}>
//             <Form  onSubmit={this.doLogin}>
              
//               <FormGroup>
//                 <Label for="email"><strong>Email</strong></Label>
//                 <Input autoFocus 
//                   type="text"
//                   name="email" id="email"
//                   value={this.state.email}
//                   placeholder="Enter Email"
//                   autoComplete="email"
//                   onChange={this.changeHandler}
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Label for="password"><strong>Password</strong></Label>
//                 <Input type="password" 
//                   name="password" id="password"
//                   value={this.state.password}
//                   placeholder="Enter Password"
//                   autoComplete="password"
//                   onChange={this.changeHandler}
//                 />
//               </FormGroup>
//               <Button onClick={this.doLogin} type="submit" variant="primary" size="lg" block>
//                 LogIn
//               </Button>
//               {
//                 this.state.error && (
//                   <Alert color="danger">
//                     {this.state.error}
//                   </Alert>
//                 )
//               }
//             </Form>
//             </Col>
//           </Row>
//         </Container>
//       </div>);
//   }
// }
// export default Login;