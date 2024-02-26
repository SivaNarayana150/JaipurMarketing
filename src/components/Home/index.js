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
  Paragraph,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <>
        <FormBgContainer>
          <HeaderDiv>
            <ProfileIcon />
            <MenuIcon />
          </HeaderDiv>
          <LogoText>Hi! Tushar</LogoText>
        </FormBgContainer>

        <SimpleSlider />
        <FormBgContainer>
          <LearnContainer>
            <Ribbon>
              <Paragraph>New</Paragraph>
            </Ribbon>
          </LearnContainer>
          <Paragraph>What do you want to learn today? Tushar!</Paragraph>
        </FormBgContainer>
      </>
    )
  }
}

export default Home
