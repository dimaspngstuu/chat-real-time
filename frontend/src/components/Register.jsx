import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { userRegister } from "../store/actions/authAction";

const Register = () => {

  const dispatch = useDispatch();

  const [state,setState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: ''
  });

  const [loadImage, setLoadImage] = useState('');


  const inputHandle = e => {
    setState(
      {...state,[e.target.name]: e.target.value}
    )
  } 


  const inputFile = e => {
    if(e.target.files.length !== 0){
      setState({
        ...state,
        [e.target.name]: e.target.value[0]
      })
    }

    const reader = new FileReader();
    reader.onload = () => {
      setLoadImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const register = e => {
    const {username,email,password,confirmPassword,image} = state;
    e.preventDefault();

    const formData = new FormData();

    formData.append('username',username);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('confirmPassword',confirmPassword);
    formData.append('image',image);

  
    dispatch(userRegister(formData));

  }


  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                id="username"
                name="username"
                value={state.username}
                onChange={inputHandle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={state.email}
                onChange={inputHandle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                value={state.password}
                onChange={inputHandle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={inputHandle}
              />
            </div>

            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {loadImage ? <img src={loadImage} alt="NoPhoto"/> : ''}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input 
                  type="file" 
                  className="form-control" 
                  id="image"
                  name="image"
                  onChange={inputFile}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="register" className="btn" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/messenger/login">Login Your Account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
