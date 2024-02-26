import styled from 'styled-components'

export const FormBgContainer = styled.div`
  background-color: #00a7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const LogoText = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
`

export const ImageCreateAccount = styled.img`
  margin-top: 35px;
  height: 30%;
  width: 80%;
  border-radius: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: 767px) {
    height: 45%;
    width: 80%;
  }
`

export const InputElement = styled.input`
  width: 250px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: normal;
  color: #3b4856;
  background-color: #ffffff;
  border-style: none;

  padding: 4px;
  margin-bottom: 13px;

  &:focus {
    outline: none;
    border-color: none;
  }
  @media screen and (min-width: 767px) {
    width: 350px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`

export const AccountStatus = styled.p`
  font-family: 'Bree serif';
  font-style: italic;
  font-weight: 800;
  margin-bottom: 0px;
  color: ${props => (props.warn ? '#FF0000' : '#006400')};
`

export const SignUpButton = styled.button`
  background-color: #3b4856;
  color: #ffffff;
  font-weight: bold;
  width: 100px;
  height: 30px;
`
