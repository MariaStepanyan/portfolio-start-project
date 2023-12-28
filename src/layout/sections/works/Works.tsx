import { SectionTitle } from '../../../components/SectionTitle'
import { TabMenu, TabsStatusType } from './menu/TabMenu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'
import socialImgPng from '../../../assets/images/proj1.png'
import timerImgPng from '../../../assets/images/proj2.png'
import { Container } from '../../../components/Container'
import { S } from './Works_Styles'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
    id: 1,
  },
  {
    src: timerImgPng,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'react',
    id: 2,
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
    <S.Works id="works">
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div style = {{width: '400px',
                  flexGrow: 1, maxWidth: '540px'}}
                  layout={true}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work src={w.src} key={w.id} title={w.title} text={w.text} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
