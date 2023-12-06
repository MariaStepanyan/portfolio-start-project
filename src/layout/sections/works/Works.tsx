import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Menu } from '../../../components/menu/Menu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'
import socialImgPng from '../../../assets/images/proj1.png'
import timerImgPng from '../../../assets/images/proj2.png'
import socialImgWebp from '../../../assets/images/proj1.webp'
import timerImgWebp from '../../../assets/images/proj2.webp'

const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItem={worksItems} />
      <FlexWrapper justify="space-around">
        <Work
          src={socialImgPng}
          title="Social Network"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <Work
          src={timerImgPng}
          title="Timer"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
        />
      </FlexWrapper>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #f5f381;
`
