import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>
       <div className='register'>
        <div className='card'>
          <div className='card-header'>
            <h3>Login</h3>
          </div>
          <div className='card-body'>
            <form action="">

              <div className='form-group'>
                <label htmlFor="email">Email:</label><br/>
                <input type="email" className='form-control' placeholder='Email' id='email' />
              </div>

              <div className='form-group'>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" className='form-control' placeholder='Password' id='password' />
              </div>

              <div className='form-group'>
                <input type="submit" value="register" className='btn' />
              </div>

              <div className='form-group'>
                <p>Dont have any account?<span><Link to="/messenger/register">Click Here</Link></span></p>
              </div>

            </form>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Login