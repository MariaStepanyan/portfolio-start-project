import styled from 'styled-components'
import photoJpg from '../../../assets/images/photo.jpg'
import photoWebp from '../../../assets/images/photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={'center'} justify={'space-around'}>
        <div>
          <span>Hi There</span>
          <Name>I am Maria Stepanyan</Name>
          <MainTitle>A Web Developer. </MainTitle>
        </div>
        <Photo src={photoWebp || photoJpg} alt="" />
      </FlexWrapper>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fdecb9;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1``

const Name = styled.h2``
