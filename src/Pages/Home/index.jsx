import { AiFillFire, AiOutlineLine } from 'react-icons/ai'

import { Container, Text, Button } from './styles'

function Home() {
  return (
    <main>
      <Container>
        <Text>
          <svg width='0' height='0'>
            <linearGradient
              id='blue-gradient'
              x1='100%'
              y1='100%'
              x2='0%'
              y2='0%'
            >
              <stop stopColor='#8e2de2' offset='20%' />
              <stop stopColor='#8023e1' offset='40%' />
              <stop stopColor='#7119e1' offset='60%' />
              <stop stopColor='#600de0' offset='80%' />
              <stop stopColor='#4a00e0' offset='100%' />
            </linearGradient>
          </svg>
          <h1>Welcome!</h1>
          <h2>Wanna find something to watch?</h2>
          <h2>
            <AiOutlineLine />
          </h2>
          <h2>
            Yeah!
            <AiFillFire style={{ fill: 'url(#blue-gradient)' }} />
          </h2>
          <h2>So you came to the right place. </h2>
        </Text>
        <Button href='/#/trending'>
          <h3>Start</h3>
        </Button>
      </Container>
    </main>
  )
}

export default Home
