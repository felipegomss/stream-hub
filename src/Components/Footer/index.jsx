import { AiOutlineHeart } from 'react-icons/ai'

import { Container } from './styles'

function Footer() {
  return (
    <Container>
      <svg width='0' height='0'>
        <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#8e2de2' offset='20%' />
          <stop stopColor='#8023e1' offset='40%' />
          <stop stopColor='#7119e1' offset='60%' />
          <stop stopColor='#600de0' offset='80%' />
          <stop stopColor='#4a00e0' offset='100%' />
        </linearGradient>
      </svg>
      <p>
        Made with <AiOutlineHeart style={{ fill: 'url(#blue-gradient)' }} /> by{' '}
        <a href='felipegomes.me' target='_blank'>
          Felipe Gomes
        </a>
      </p>
    </Container>
  )
}

export default Footer
