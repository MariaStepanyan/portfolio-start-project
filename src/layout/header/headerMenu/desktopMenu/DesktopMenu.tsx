import { Menu } from '../menu/Menu'
import { S } from './../headerMenu_Styles'

export const DesktopMenu: React.FC<{ menuItem: Array<string> }> = (props: {
  menuItem: Array<string>
}) => {
  return (
    <S.DesktopMenu>
      <Menu menuItem={props.menuItem} />
    </S.DesktopMenu>
  )
}
