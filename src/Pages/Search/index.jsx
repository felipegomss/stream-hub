/* eslint-disable react/prop-types */
import Card from 'Components/Card'
import { useEffect, useState } from 'react'
import api from 'Services/api'

import { Container, Content } from './styles'

function Search({ match }) {
  const [data, setData] = useState([])
  useEffect(() => {
    async function loadApi() {
      await api
        .get(
          `search/multi?api_key=f8aa2b4202ca0004d90f16be4f20efb0&language=en-US&query=${match.params.find}&page=1`
        )
        .then((res) => {
          setData(res.data.results)
        })
    }
    loadApi()
  }, [])

  console.log(data)
  return (
    <main>
      <Container>
        <h1 onChange={location.assign(`/#/search/${match.params.find}`)}>
          {match.params.find.toUpperCase()}
        </h1>
        <Content>
          {data.map((item, index) => {
            console.log(item)
            return (
              <>
                {item.media_type !== 'person' && (
                  <Card
                    key={index}
                    img={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    data={item}
                  />
                )}
              </>
            )
          })}
        </Content>
      </Container>
    </main>
  )
}

export default Search
