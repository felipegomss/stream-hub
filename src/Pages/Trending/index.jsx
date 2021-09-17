import Board from 'Components/Board'
import { useEffect, useState } from 'react'
import API from 'Services/dataTrending'
import { Loading } from 'Styles/globalStyles'

import { Container } from './styles'

function Trending() {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await API.getTrending()
      setData(list)
    }
    loadAll()
  }, [])

  return (
    <>
      <Container>
        {data.map((item, index) => {
          return <Board key={index} title={item.title} items={item.items} />
        })}
      </Container>
      {data.length <= 0 && (
        <Loading>
          <h1>CARREGANDO</h1>
        </Loading>
      )}
    </>
  )
}

export default Trending
