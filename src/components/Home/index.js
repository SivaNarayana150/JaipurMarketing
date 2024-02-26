import {Component} from 'react'

import SimpleSlider from '../SimpleSlider'

import {
  HeaderDiv,
  FormBgContainer,
  ProfileIcon,
  MenuIcon,
  LogoText,
  LearnContainer,
  Ribbon,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <FormBgContainer>
        <HeaderDiv>
          <ProfileIcon />
          <MenuIcon />
        </HeaderDiv>
        <LogoText>Hi! Tushar</LogoText>
        <SimpleSlider />
        <LearnContainer>
          <Ribbon>
            <p>NEW</p>
          </Ribbon>
        </LearnContainer>
      </FormBgContainer>
    )
  }
}

export default Home
