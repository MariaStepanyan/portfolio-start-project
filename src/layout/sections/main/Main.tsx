import styled from 'styled-components'
import photoJpg from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/common'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-around'} wrap="wrap">
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
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.tablet} {
      width: 314px;
      height: 414px;
      margin-top: 65px;
      top: -17px;
      left: 20px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.tablet} {
    width: 310px;
    height: 380px;
    margin-top: 65px;
  }
`
const MainTitle = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 20 })}
`

const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })}
  letter-spacing: 2.5px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

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

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;

  @media ${theme.media.mobile} {
    display: inline-block;
    margin-top: 26px;
  }
`
