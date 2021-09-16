import styled from 'styled-components'

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 10vh;
  margin-bottom: 8em;

  h2 {
    display: flex;
    align-items: center;
  }

  @media (min-width: 760px) {
    margin: 0;
    font-size: 2em;
    justify-content: center;
    height: 70vh;
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;

  @media (max-width: 760px) {
    justify-content: center;
  }
`

export const Button = styled.a`
  width: 100px;
  text-align: center;
  padding: 1em;
  background-image: linear-gradient(
    to right,
    #8e2de2,
    #8023e1,
    #7119e1,
    #600de0,
    #4a00e0
  );
  letter-spacing: 3px;
`
