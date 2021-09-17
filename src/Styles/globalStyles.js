import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: #0D0D0D;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  main{
    width: 75%;
    margin: 2em auto;
  }
  p, h1, h2, h3, ul{
    margin: 0;
    list-style: none;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  background: #0d0d0d;
  display: grid;
  place-items: center;
`

export default GlobalStyle
