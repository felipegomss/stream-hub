import styled from 'styled-components'

export const Container = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,200&display=swap');

  font-family: 'Roboto Mono', monospace;
  font-weight: 200;
  font-style: italic;
  font-size: 2em;

  background-color: #0d0d0d;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
`

export const Back = styled.div`
  padding: 0 0 2px 0;
  background-image: linear-gradient(
    to right,
    #8e2de2,
    #8023e1,
    #7119e1,
    #600de0,
    #4a00e0
  );

  -webkit-animation: fadein 0.3s linear forwards;
  animation: fadein 0.5s linear forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Nav = styled.div``

export const Button = styled.a`
  margin-left: 10px;
  display: grid;
  place-items: center;
  cursor: pointer;
`

export const TxtDk = styled.li`
  display: none;

  @media (min-width: 760px) {
    display: block;
  }
`

export const TxtMob = styled.a`
  display: block;

  @media (min-width: 760px) {
    display: none;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin: 1em 0 0 0;
  padding: 0;
  position: relative;
  font-size: 1.3em;
  a {
    margin: 0 0.5em;
  }

  div {
    padding: 0 0 1em 0;
  }

  -webkit-animation: fadein 0.3s linear forwards;
  animation: fadein 0.5s linear forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Search = styled(Button)`
  position: absolute;
  right: 20px;
`

export const Input = styled.input`
  padding: 1em;
  border: 1px solid #6e30f2;
  width: 60%;

  @media (min-width: 760px) {
    width: 90%;
  }

  &:focus {
    border: 1px solid #6e30f2 !important;
  }
`
