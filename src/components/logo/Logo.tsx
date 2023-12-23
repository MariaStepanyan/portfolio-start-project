import Img from '../../assets/images/favicon.svg'
// import { Icon } from '../icon/Icon'

export const Logo: React.FC = () => {
  return (
    <a href="">
      {/* <Icon iconId='myLogo' /> */}
      <img src={Img} width="50" height="50" />
    </a>
  )
}
