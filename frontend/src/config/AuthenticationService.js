import axios from "axios";
class AuthenticationService {
  signin = (email, password) => {
      return axios.post("http://localhost:5000/signin", {email, password})
        .then(response => {
          if (response.data.user) {
            window.localStorage.setItem("user", JSON.stringify(response.data.user));
            return response.data.user;
          }
          throw new Error('No token')
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }
  
  register = async(email, password) => {
    return axios.post("http://localhost:5000/signup", {
      email,
      password
    });
  }
  
}
export default new AuthenticationService();