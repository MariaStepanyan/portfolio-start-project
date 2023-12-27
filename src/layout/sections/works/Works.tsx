import { SectionTitle } from '../../../components/SectionTitle'
import { TabMenu } from './menu/TabMenu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'
import socialImgPng from '../../../assets/images/proj1.png'
import timerImgPng from '../../../assets/images/proj2.png'
import { Container } from '../../../components/Container'
import { S } from './Works_Styles'

const tabsItems = ['All', 'landing page', 'React', 'spa']

const workdata = [
  {
    src: socialImgPng,
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    src: timerImgPng,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
]

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu tabsItems={tabsItems} />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {workdata.map((w, item) => {
            return <Work src={w.src} key={item} title={w.title} text={w.text} />
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}


