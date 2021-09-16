/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import api from 'Services/api'

import { Container } from './styles'

function Browse({ match }) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function loadApi() {
      await api
        .get(
          `${match.params.type}/${match.params.id}?api_key=f8aa2b4202ca0004d90f16be4f20efb0&language=en-US`
        )
        .then((res) => {
          setMovie(res.data)
        })
        .catch((e) => alert('Error on search'))
    }
    loadApi()
  }, [])

  return (
    <main>
      <Container>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
        <a
          href={movie.homepage || '/#/error/404p'}
          target='_blank'
          rel='noreferrer'
        >
          Watch now
        </a>
      </Container>
    </main>
  )
}

export default Browse
