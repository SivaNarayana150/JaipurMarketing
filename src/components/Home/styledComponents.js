import styled from 'styled-components'

import {CgProfile} from 'react-icons/cg'

import {TfiMenuAlt} from 'react-icons/tfi'

export const FormBgContainer = styled.div`
  background-color: #00a7f8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 0px;
`

export const HeaderDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const ProfileIcon = styled(CgProfile)`
  color: #00a7f8;
  background-color: #ffffff;
  height: 50px;
  width: 50px;
  margin: 2px;
  border-radius: 50px;
  border: none;
  margin: 5px;
`

export const MenuIcon = styled(TfiMenuAlt)`
  color: #ffffff;
  font-size: 50px;
`
export const LogoText = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
  align-self: flex-start;
  margin-left: 10px;
  margin-bottom: 20px;
`
export const LearnContainer = styled.div`
  background-color: #ffffff;
  height: 40vh;
  width: 70vw;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0px;
`

export const Ribbon = styled.div`
  background-color: yellow;
  height: 25px;
  width: 100px;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  transform: rotate(-45deg);
`

export const Paragraph = styled.p`
  font-family: 'Playfair Display';
  font-size: 21px;
  text-align: center;
  color: #ffffff;
`
