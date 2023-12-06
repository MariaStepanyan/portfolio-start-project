import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'

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
                viewBox="0 0 21px 21px"
                iconId="instagram"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId="telegram"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId="vk"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
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
  background-color: bisque;
  min-height: 20vh;
`

const Name = styled.span``

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li``

const SocialLink = styled.a``
const Copyright = styled.small``
