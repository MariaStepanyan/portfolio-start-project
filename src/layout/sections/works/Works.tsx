import { SectionTitle } from '../../../components/SectionTitle'
import { TabMenu, TabsStatusType } from './menu/TabMenu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'
import socialImgPng from '../../../assets/images/proj1.png'
import timerImgPng from '../../../assets/images/proj2.png'
import { Container } from '../../../components/Container'
import { S } from './Works_Styles'
import { useState } from 'react'

const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
  {
    title: 'All',
    status: 'all',
  },
  {
    title: 'landing page',
    status: 'landing',
  },
  {
    title: 'React',
    status: 'react',
  },
  {
    title: 'spa',
    status: 'spa',
  },
]

const worksData = [
  {
    src: socialImgPng,
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'spa',
  },
  {
    src: timerImgPng,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'react',
  },
]

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
  let filteredWorks = worksData

  if (currentFilterStatus === 'landing') {
    filteredWorks = worksData.filter((work) => work.type === 'landing')
  }
  if (currentFilterStatus === 'react') {
    filteredWorks = worksData.filter((work) => work.type === 'react')
  }
  if (currentFilterStatus === 'spa') {
    filteredWorks = worksData.filter((work) => work.type === 'spa')
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value)
  }

  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {filteredWorks.map((w, item) => {
            return <Work src={w.src} key={item} title={w.title} text={w.text} />
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
