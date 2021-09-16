import Board from 'Components/Board'
import { useEffect, useState } from 'react'
import API from 'Services/dataTrending'

import { Container } from './styles'

function Trending() {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await API.getData()
      setData(list)
    }
    loadAll()
  }, [])

  return (
    <>
      <main>
        <h1>What&apos;s Trending?</h1>
      </main>
      <Container>
        {data.map((item, index) => {
          return <Board key={index} title={item.title} items={item.items} />
        })}
      </Container>
    </>
  )
}

export default Trending
