import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  FormBgContainer,
  LogoText,
  ImageCreateAccount,
  InputElement,
  FormContainer,
  AccountStatus,
  SignUpButton,
} from './styledComponents'

class CreateAccount extends Component {
  state = {
    usernameInput: '',
    phInput: '',
    emailInput: '',
    passwordInput: '',
    warning: '',
    accountCreated: '',

    accountHolders: [],
    jwtToken: 0,
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phInput: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({emailInput: event.target.value})
  }

  onChangePassword = event => this.setState({passwordInput: event.target.value})

  handleSubmit = event => {
    const {history} = this.props
    const {
      usernameInput,
      phInput,
      emailInput,
      passwordInput,
      accountHolders,
      jwtToken,
      accountCreated,
    } = this.state
    event.preventDefault()

    const newObject = {
      username: usernameInput,
      ph: phInput,
      email: emailInput,
      password: passwordInput,
    }

    const isUserPresent = accountHolders.find(
      eachUser => eachUser.username === usernameInput,
    )

    if (isUserPresent) {
      this.setState({warning: true, accountCreated: false})
    } else {
      this.setState(prevState => ({
        accountHolders: [...prevState.accountHolders, newObject],
        accountCreated: true,
        warning: false,
        jwtToken: `${prevState.jwtToken + 1}JWTTOKENAUTHORIZED`,
      }))
      Cookies.set('jwt_Token', jwtToken, {expires: 7})
    }
    if (accountCreated === true) {
      history.replace('/home')
    }
  }

  render() {
    const {
      usernameInput,
      phInput,
      emailInput,
      passwordInput,
      warning,
      accountCreated,
    } = this.state

    const warningMessage = warning ? 'User Already Exist' : ''
    const accountCreatedMessage = accountCreated
      ? 'Account Created Successfully'
      : ''

    return (
      <FormBgContainer>
        <LogoText>Create Account</LogoText>
        <ImageCreateAccount
          alt="Register"
          src="https://www.nucleustechnologies.com/blog/wp-content/uploads/2022/10/900x416-7.jpg"
        />

        <FormContainer onSubmit={this.handleSubmit}>
          <InputElement
            type="text"
            placeholder="Full Name"
            id="USERNAME"
            value={usernameInput}
            onChange={this.onChangeUsername}
          />

          <InputElement
            type="text"
            placeholder="Phone"
            id="PHONE"
            value={phInput}
            onChange={this.onChangePhoneNumber}
          />
          <InputElement
            type="text"
            placeholder="Email"
            id="MAIL"
            value={emailInput}
            onChange={this.onChangeEmail}
          />
          <InputElement
            type="password"
            placeholder="Password"
            id="PASSWORD"
            value={passwordInput}
            onChange={this.onChangePassword}
          />

          <SignUpButton type="submit">Sign Up</SignUpButton>
          <AccountStatus warn="true">{warningMessage}</AccountStatus>
          <AccountStatus>{accountCreatedMessage}</AccountStatus>
        </FormContainer>
      </FormBgContainer>
    )
  }
}

export default withRouter(CreateAccount)
