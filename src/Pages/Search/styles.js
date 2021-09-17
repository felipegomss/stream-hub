import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    opacity: 0.5;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
