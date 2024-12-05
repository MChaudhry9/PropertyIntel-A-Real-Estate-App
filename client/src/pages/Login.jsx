import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const [error, setError] = useState('')

  function handleFormChange(e) {
    setFormData((prevFormData) => {
      return{
        ...prevFormData,
        [e.target.name]:e.target.value
      }
    })
  }

  function handleSubmit() {
    alert("submit")
  }

  function handleRegisterClick(){
    navigate('/register')
  }

  return (
    <div className="full-screen-container">
      <div className="inside-container">
        <h2 style={{marginTop: '0px'}}>
          Login or
          {' '}
            <span
              role="button"
              onClick={handleRegisterClick}
              style={{ color: 'purple', cursor: 'pointer', textDecoration: 'underline' }}
              // onKeyDown={handleRegisterClick}
              tabIndex={0} // Make it focusable
            >
              Register
            </span>
        </h2>

        <form className="loginForm" onSubmit={() => navigate('/register')}>
          <div className="inputGroup">
            <div className="formGroup">
              <label htmlFor="username">Username/Email</label>
              <input type="text" id="email" placeholder='email' name="Email" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder='Password' name="password" />
            </div>
          </div>
          <button type="submit">Log in</button>
          <h2>Or Sign in with:</h2>
        </form>

      </div>
    </div>
  )
}

export default Login;