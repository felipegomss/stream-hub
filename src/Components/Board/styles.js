import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1em;
  padding: 0 2em;
  position: relative;

    .moveRight {
      right: 0;
    }

    &:hover .arrow {
      opacity: 1;
    }
  }
  h1 {
    font-size: 1.5em;
  }
`

export const ArrowL = styled.div`
  font-size: 5em;
  position: absolute;
  width: 1em;
  height: 6em;
  background-color: rgba(3, 3, 3, 0.4);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: none !important;
  opacity: 0;
  transition: all ease 0.6s;
  cursor: pointer;
  left: 0;
  -webkit-overflow-scrolling: touch;
  @media (max-width: 768px) {
    opacity: 0;
    background-color: rgba(3, 3, 3, 0);
  }
`
export const ArrowR = styled.div`
  font-size: 5em;
  position: absolute;
  width: 1em;
  height: 6em;
  background-color: rgba(3, 3, 3, 0.4);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: none !important;
  opacity: 0;
  transition: all ease 0.6s;
  cursor: pointer;
  right: 0;
  -webkit-overflow-scrolling: touch;
  @media (max-width: 768px) {
    opacity: 0;
    background-color: rgba(3, 3, 3, 0);
  }
`

export const Content = styled.div`
  display: flex;
  overflow-x: scroll;
  position: relative;
  transition: all ease 0.5s;

  &::-webkit-scrollbar {
    display: none;
  }
`
