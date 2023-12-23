import styled from 'styled-components'
import { theme } from '../styles/Theme'
import { font } from '../styles/common'

export const SectionTitle = styled.h2`
  color: ${theme.colors.font};
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 600,
    Fmax: 36,
    Fmin: 30,
  })}
  letter-spacing: 5px;
  text-align: center;
  position: relative;
  margin-bottom: 90px;

  &::before {
    content: '';
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.font};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`
