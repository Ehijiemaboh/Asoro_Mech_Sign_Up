import React from 'react' 
import './LoginSignup.scss'
import Autoimg from '../Assets/ASORO LOGO.png'
import Autoimgb from '../Assets/ASORO LOGOB.png'
import Autoimgc from '../Assets/Google.png'

export const LoginSignup = () => {
  return (
    <div className='ContainerA'> 
      <div className='Container'>
        <div className='headerimg'><img src={Autoimg} alt='Asoro Car Icon'/></div>
        <div className='header'>
          <div className='text'><h2>Car Owner's Sign in</h2></div>
          <div className='text'><h6>Enter your account details</h6></div>
        </div>
        <div className='inputs'>
          <div className='input' id='inputEmail'>
            <b><h4>Email</h4></b>
            <input placeholder='chuksjohn@gmail.com' type='email' />
          </div>
          <div className='input' id='inputPassword'>
            <b><h4>Password</h4></b>
            <input placeholder='Enter your password' type='password' />
          </div>
          <div className='radio'>
            <label>
              <input className='radiob'  type="radio" name='radio'/>
              <span className='label' >Remember Me </span>
            </label>
            <a className='a' href='https//google.com' ><b>Recover Password</b></a>
          </div>
          <div className='submit-container'>
            <div className='submit'> <button id='signin'>Sign in</button></div>
            <p id='or'>  or </p>
            <div className='submit'><button id='continue'><img src={Autoimgc} alt='googleimg'></img> Continue with Google</button> </div>
          </div>
          <div id='create'><p>you don't have an account? <a href='https//google.com'><b>Create an account</b></a></p></div>
        </div> 
      </div>
      <div className='ContainerB'>
        <div id='radientA'></div>
        <div id='radientB'></div>
        <div id='radientC'></div>
        <img src={Autoimgb} alt='pics'></img>
        <div className='dots'>
          <div className='Pre-dots'>
            <div className='text'><h6> Asoro Automotive</h6></div>
            <div className='dot_cycle'></div>
            <div className='dot_cylinder'></div>
            <div className='second_cycle' > </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
