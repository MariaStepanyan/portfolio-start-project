import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import { theme } from '../../styles/Theme'

const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify='space-between' align='center'>
          <Logo />
          <HeaderMenu menuItem={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #fffef694;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`
