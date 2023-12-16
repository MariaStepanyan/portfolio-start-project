import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'

const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify='space-between' align='center'>
          <Logo />
          <Menu menuItem={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #7a0000;
  display: flex;
  justify-content: space-between;
`
