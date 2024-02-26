import styled from 'styled-components'

import {CgProfile} from 'react-icons/cg'

import {TfiMenuAlt} from 'react-icons/tfi'

import {BsTagFill} from 'react-icons/bs'

export const FormBgContainer = styled.div`
  background-color: #00a7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
background-color:#ffffff
height:45vh;
width:70vw;

`

export const Ribbon = styled(BsTagFill)`
  color: yellow;
`
