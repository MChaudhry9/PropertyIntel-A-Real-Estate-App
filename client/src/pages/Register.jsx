import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email:'',
    password:'',
    confirmpassword:''
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
    alert("Registered")
  }

  function handleLoginClick(){
    navigate('/login')
  }

  return (
    <div className="full-screen-container">
      <div className="inside-container">
        {/* <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-5th-avenue-nyc-traffic-melanie-viola.jpg"/> */}
        <h2 style={{marginTop: '0px'}}>
          <span
            role="button"
            onClick={handleLoginClick}
            style={{ color: 'purple', cursor: 'pointer', textDecoration: 'underline' }}
            tabIndex={0}
          >
            Login
          </span>
          {' '}
          or Register
        </h2>

        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <div className="formGroup">
              <label htmlFor="username">Username/Email</label>
              <input type="text" id="email" placeholder='Email' name="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder='Password' name="password" />
            </div>
            <div className="formGroup">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder='Password' name="confirm-password" />
            </div>
          </div>
          <button type="submit">Log in</button>
        </form>

      </div>
    </div>
  )
}

export default Register;