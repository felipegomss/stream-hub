import { useEffect, useState } from 'react'
import { AiFillFire, AiOutlineLine } from 'react-icons/ai'
import API from 'Services/dataTrending'

import { Container, Text, Button } from './styles'

function Home() {
  const [data, setData] = useState({})
  const [index, setIndex] = useState(Math.floor(Math.random() * 19))

  useEffect(() => {
    setIndex(Math.floor(Math.random() * 19))
    const loadAll = async () => {
      const list = await API.getTrending()
      setData(list[0].items.results[index])
    }
    loadAll()

    console.log(index)
  }, [])

  return (
    <Container
      style={{
        backgroundImage: `url(
        https://image.tmdb.org/t/p/original${data.backdrop_path}
        )`
      }}
    >
      <main>
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
      </main>
      <Button href='/#/trending'>
        <h3>See trends</h3>
      </Button>
    </Container>
  )
}

export default Home
