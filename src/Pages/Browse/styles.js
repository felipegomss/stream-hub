import { Button } from 'Pages/Home/styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  background-position: center;
  background-size: auto;
  @media (min-width: 760px) {
    height: 50vh;
  }
`
export const Mask = styled.span`
  width: 100%;
  height: 100%;
  background-color: rgba(13, 13, 13, 0.9);
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em 0;

  h1 {
    padding-bottom: 0.5em;
  }

  @media (min-width: 760px) {
    width: 60%;
    margin: 2em auto;
    display: grid;
    grid-template: 1fr / 1fr 3fr;
    h1 {
      padding: 0;
    }
  }
`

export const Desciption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  ul {
    display: flex;
    padding: 0.5em 0;

    li {
      padding-right: 5px;
    }
  }

  @media (min-width: 760px) {
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr/ 1fr;
  }
`

export const Poster = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`

export const Go = styled(Button)`
  width: 200px !important;
`
