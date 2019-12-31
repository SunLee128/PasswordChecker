import React from 'react'
import checkPassword from './checkPassword';
// import './PasswordInput.css'
// import checkPassword from './checkPassword'

export default class PasswordInput extends React.Component{
  constructor() {
		super();
		this.state = {
      password:'',
		};
  }

  handleChange = (event) => {
		this.setState({
			password: event.target.value
		});
  };
  
  render(){

    const { hasLowerCase } = checkPassword(this.state.password)


    const password = this.state.password
    const hasLowercase = password.search(/[a-z]/) !== -1            
    const hasUppercase = password.search(/[A-Z]/) !== -1           
    const hasNumber = password.search(/[0-9]/) !== -1
    const hasNonAlphaNumeric = password.search(/[^a-zA-Z0-9]/g) !== -1 
    const isOver8Char = password.length > 8
    const isOver12Char = password.length > 12
    const score = [hasLowercase,hasUppercase,hasNumber,hasNonAlphaNumeric,isOver12Char,isOver8Char]
                  .filter(check => check===true)
                  .length

    return (
      <div className='password-input'>
        <h1 className='h1'>HOW SECURE IS MY PASSWORD?</h1>
        <div className='container'>
          <input className='inputbox' 
                 placeholder="Enter Password" 
                 onChange={this.handleChange} 
                 type="password" 
          />
        </div>
        <div className="conditions">
          <input type="checkbox" checked={hasLowercase} readOnly/>Has lowercase?<br/>
          <input type="checkbox" checked={hasUppercase} readOnly/>Has Uppercase?<br/>
          <input type="checkbox" checked={hasNumber} readOnly/>Has Number?<br/>
          <input type="checkbox" checked={hasNonAlphaNumeric} readOnly/>Has Special Character?<br/>
          <input type="checkbox" checked={isOver8Char} readOnly/>Has over 8 characters<br/>
          <input type="checkbox" checked={isOver12Char} readOnly />Has over 12 characters<br/>
          <h2>score: {score}</h2>
        </div>
      </div>
    )
  }
}