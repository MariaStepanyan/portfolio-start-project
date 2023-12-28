import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from 'react'

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false)
    })
  }, [])

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop()
          }}
        >
          <Icon
            iconId="arrowGoTop"
            height="18"
            width="20"
            viewBox="0 0 28 28"
          />
        </StyledGoTopBtn>
      )}
    </>
  )
}

const StyledGoTopBtn = styled.button`
  background-color: rgba(231, 198, 29, 0.314);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 50%;
`
