import Img from '../../assets/images/favicon.svg'
// import { Icon } from '../icon/Icon'
import { animateScroll as scroll} from 'react-scroll'

export const Logo: React.FC = () => {
  return (
    <a onClick={() => {scroll.scrollToTop()}}>
      {/* <Icon iconId='myLogo' /> */}
      <img src={Img} width="50" height="50" />
    </a>
  )
}
