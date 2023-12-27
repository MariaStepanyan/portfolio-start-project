import photoJpg from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { S } from './Main_Styles'
import Typewriter from 'typewriter-effect'

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={'center'} justify={'space-around'} wrap="wrap">
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Maria Stepanyan</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photoJpg} alt="" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}
