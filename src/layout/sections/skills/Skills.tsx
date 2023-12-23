import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'
import { Container } from '../../../components/Container'
import { S } from './Skills_Styles'

const skillData = [
  {
    iconId: 'code',
    title: 'html5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'css',
    title: 'css3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'react',
    title: 'React',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'typescript',
    title: 'typescript',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'styledComponents',
    title: 'styled components',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'figma',
    title: 'WEB DESIGN',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
]

export const Skills = () => {
  return (
    <S.Skills>
      <SectionTitle>My Skills</SectionTitle>
      <Container>
        <FlexWrapper wrap="wrap" justify={'space-between'}>
          {skillData.map((s, index) => {
            return <Skill iconId={s.iconId} key={index} title={s.title} text={s.text} />
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}


