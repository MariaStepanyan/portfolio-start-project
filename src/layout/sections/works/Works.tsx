import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { TabMenu } from './menu/TabMenu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'
import socialImgPng from '../../../assets/images/proj1.png'
import timerImgPng from '../../../assets/images/proj2.png'
import { Container } from '../../../components/Container'

const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItem={worksItems} />
        <FlexWrapper justify="space-between" align="flex-start">
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
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.section``
