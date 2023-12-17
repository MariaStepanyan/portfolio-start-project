import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { theme } from '../../styles/Theme'

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Maria</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21 21"
                iconId="instagram"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21 21"
                iconId="telegram"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21 21"
                iconId="vk"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21 21"
                iconId="linkedin"
              ></Icon>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Stepanyan Maria, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primeryBg};
  padding: 40px 0;
`

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
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
