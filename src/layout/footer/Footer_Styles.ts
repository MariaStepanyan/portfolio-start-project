import styled from 'styled-components'
import { font } from '../../styles/common'
import { theme } from '../../styles/Theme'

const Footer = styled.footer`
  background-color: ${theme.colors.primeryBg};
  padding: 40px 0;
`

const Name = styled.span`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })}
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(226, 218, 0, 0.301);
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.font};

  &:hover {
    color: ${theme.colors.primeryBg};
    transform: translateY(-4px);
    background-color: ${theme.colors.font};
  }
`

const Copyright = styled.small`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
}
