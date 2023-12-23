import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { theme } from '../../../../styles/Theme'

type SkillPropsType = {
  iconId: string
  title: string
  text: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.text}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 8px 0 92px;
  }
`
export const IconWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(216, 216, 22, 0.226);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`
const SkillText = styled.p`
  text-align: center;
`
