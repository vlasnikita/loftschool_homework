import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { authorizeUser } from './AuthorizeApi'

class Auth extends Component {

  state = {
    email: '',
    password: '',
    isError: false,
    isAuthorized: false
  }

  handleInputChange = ({ target: { name, value }}) => {
    this.setState({
      [name]: value,
      isError: false
    })
  }

  handleSubmit = () => {
    const { email, password } = this.state
    const isAuthorized = authorizeUser(email, password)

    this.setState({
      isAuthorized,
      isError: !isAuthorized
    })
  }

  render() {

    const { email, password, isError, isAuthorized } = this.state

    return (
      <div>
        {isAuthorized && <Redirect to="/" />}
        <input 
          name="email"
          type="email"
          placeholder="email" 
          value={email}
          onChange={this.handleInputChange} 
        />
        <input 
          name="password"
          type="password"
          placeholder="password" 
          value={password}
          onChange={this.handleInputChange} 
        />
        {isError && <p className="error">Неверный пароль и/или почта.</p>}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Auth;
