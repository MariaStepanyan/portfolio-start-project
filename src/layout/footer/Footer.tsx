import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { S } from './Footer_Styles'

const socialItemsData = [
  {
    iconId: 'instagram',
  },
  {
    iconId: 'telegram',
  },
  {
    iconId: 'vk',
  },
  {
    iconId: 'linkedin',
  },
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction="column" align="center">
        <S.Name>Maria</S.Name>
        <S.SocialList>
          {socialItemsData.map((si, index) => {
            return (
              <S.SocialItem key="index">
                <S.SocialLink>
                  <Icon
                    height="21"
                    width="21"
                    viewBox="0 0 21 21"
                    iconId={si.iconId}
                  ></Icon>
                </S.SocialLink>
              </S.SocialItem>
            )
          })}
        </S.SocialList>
        <S.Copyright>© 2023 Stepanyan Maria, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  )
}
