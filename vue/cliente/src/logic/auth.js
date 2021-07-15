import axios from "axios";
import Cookies from "js-cookie";
//import bcrypt from "bcryptjs";
import qs from 'qs';

//const ENDPOINT_PATH = "https://reqres.in/api/";
//const ENDPOINT_PATH = "https://unirsails.herokuapp.com/";
//const HEROKU = "https://unirsails.herokuapp.com";

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  deleteUserLogged() {
    Cookies.remove('userLogged');
  },

  register(fullName, email, password) {
    //const passwordHash = bcrypt.hashSync(password, 10);
    //console.log(email)
    //console.log(passwordHash)
    //const user = { email, password };
    // var axios = require("axios");
    // const axiosInstance = axios.create({
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    //   }
    // });
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // };
    //return axios.post("https://unirsails.herokuapp.com/user/register", qs.stringify(user));
    return axios({
      method: 'post',
      url: 'https://unirsails.herokuapp.com/user/register',
      data: qs.stringify({
        fullName: fullName,
        email: email,
        password: password
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    // return axios
    //     .post('https://unirsails.herokuapp.com/ticket/' + id)
    //     //.get('https://jsonplaceholder.typicode.com/todos')
    //     .then( response => {
    //       console.log(response)
    //       window.location.href='/'
    //     })
    //     .catch(e => console.log(e))
  },

  login(email, password) {
    const user = { email, password };
    return axios.post("https://unirsails.herokuapp.com/user/login", qs.stringify(user));
  }
};