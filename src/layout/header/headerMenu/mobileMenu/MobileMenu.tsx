import { Menu } from '../menu/Menu'
import { S } from './../headerMenu_Styles'

export const MobileMenu: React.FC<{ menuItem: Array<string> }> = (props: {
  menuItem: Array<string>
}) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItem={props.menuItem} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  )
}
