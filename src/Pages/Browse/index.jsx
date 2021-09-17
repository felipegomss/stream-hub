/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { RiMovie2Line } from 'react-icons/ri'
import api from 'Services/api'

import {
  Container,
  Poster,
  Go,
  Grid,
  Desciption,
  Mask,
  Score,
  Iten
} from './styles'

function Browse({ match }) {
  const [movie, setMovie] = useState([])
  const [gen, setGen] = useState({
    gen1: '',
    gen2: '',
    gen3: ''
  })

  useEffect(() => {
    async function loadApi() {
      await api
        .get(
          `${match.params.type}/${match.params.id}?api_key=f8aa2b4202ca0004d90f16be4f20efb0&language=en-US`
        )
        .then((res) => {
          setMovie(res.data)
          if (match.params.type !== 'person') {
            if (res.data.genres.length === 1) {
              setGen({
                gen1: res.data.genres[0].name
              })
            }
            if (res.data.genres.length === 2) {
              setGen({
                gen1: res.data.genres[0].name + ' -',
                gen2: res.data.genres[1].name
              })
            }
            if (res.data.genres.length > 2) {
              setGen({
                gen1: res.data.genres[0].name + ' -',
                gen2: res.data.genres[1].name + ' -',
                gen3: res.data.genres[2].name
              })
            }
          }
        })
    }
    loadApi()
  }, [])

  console.log(movie)

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
                  <li>{gen.gen2}</li>
                  <li>{gen.gen3}</li>
                </ul>
              </span>
              <Score>
                <Iten>{movie.vote_average * 10}%</Iten>
                <span>
                  <h3>Vote Average</h3>
                </span>
                {/* <Score>{movie.popularity}</Score> */}
              </Score>
              <p>{movie.overview}</p>
            </Desciption>
          </Grid>
        </Mask>
      </Container>
    </>
  )
}

export default Browse
