/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { RiMovie2Line } from 'react-icons/ri'
import api from 'Services/api'

import { Container, Poster, Go, Grid, Desciption, Mask } from './styles'

function Browse({ match }) {
  const [movie, setMovie] = useState([])
  const [gen, setGen] = useState({
    gen1: '',
    gen2: ''
  })

  useEffect(() => {
    async function loadApi() {
      await api
        .get(
          `${match.params.type}/${match.params.id}?api_key=f8aa2b4202ca0004d90f16be4f20efb0&language=en-US`
        )
        .then((res) => {
          setMovie(res.data)
          setGen({
            gen1: res.data.genres[0].name,
            gen2: res.data.genres[1].name
          })
        })
        .catch((e) => alert('Error on search'))
    }
    loadApi()
  }, [])

  return (
    <>
      <Container
        style={{
          backgroundImage: `url(
        https://image.tmdb.org/t/p/original${movie.backdrop_path}
        )`
        }}
      >
        <Mask>
          <Grid>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              />
              <Go
                href={movie.homepage || '/#/error/404p'}
                target='_blank'
                rel='noreferrer'
              >
                Watch now
              </Go>
            </Poster>
            <Desciption>
              <span>
                <h1>{movie.title || movie.name}</h1>
                <ul>
                  <li>{movie.release_date || movie.first_air_date}</li>
                  <li>
                    <RiMovie2Line />
                  </li>
                  <li>{gen.gen1}</li>
                  <li>-</li>
                  <li>{gen.gen2}</li>
                </ul>
              </span>
              <span></span>
              <p>{movie.overview}</p>
            </Desciption>
          </Grid>
        </Mask>
      </Container>
    </>
  )
}

export default Browse
