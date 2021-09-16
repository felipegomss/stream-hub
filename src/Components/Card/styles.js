import styled from 'styled-components'

export const Container = styled.a`
  width: 300px;
  height: 450px;
  padding: 2px;
  margin: 10px;
  border: 0;
  background-image: linear-gradient(
    to right top,
    #8e2de2,
    #8023e1,
    #7119e1,
    #600de0,
    #4a00e0
  );

  @media (min-width: 760px) {
    background-image: none;
    background-color: #fff;
    transition: all ease 1s;

    &:hover {
      background-image: linear-gradient(
        to right top,
        #8e2de2,
        #8023e1,
        #7119e1,
        #600de0,
        #4a00e0
      );
    }
  }
`
export const Content = styled.div`
  width: 300px;
  height: 450px;
  background-color: #0d0d0d;
`
