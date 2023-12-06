import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItem={menuItems} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #7a0000;
  display: flex;
  justify-content: space-between;
`
