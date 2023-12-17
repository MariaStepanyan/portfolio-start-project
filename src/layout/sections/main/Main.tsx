import styled from 'styled-components'
import photoJpg from '../../../assets/images/photo.jpg'
import photoWebp from '../../../assets/images/photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Maria Stepanyan</span>
            </Name>
            <MainTitle>A Web Developer. </MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photoJpg} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fdecb9;
  display: flex;
`

const PhotoWrapper = styled.div`
position: relative;
z-index: 0;
  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    left: 24px;
    top: -24px;
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      background-color: ${theme.colors.accent};
      display: inline-block;
      width: 100%;
      height: 20px;
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`
