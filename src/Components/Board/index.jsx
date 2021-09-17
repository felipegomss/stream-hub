/* eslint-disable react/prop-types */
import Card from 'Components/Card'
import { useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { Container, Content, ArrowL, ArrowR } from './styles'

function Board({ title, items, type }) {
  const [scroll, setScroll] = useState(0)
  const listRow = 325
  const listRange = 2
  const listW = items.results.length * listRow

  const handleMoveLeft = () => {
    let x = scroll + Math.round(window.innerWidth / listRange)
    if (x > 0) {
      x = 0
    }
    setScroll(x)
  }

  const handleMoveRight = () => {
    let x = scroll - Math.round(window.innerWidth / listRange)
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 50
    }
    setScroll(x)
  }

  return (
    <Container>
      <h1>{title}</h1>
      <ArrowL className='arrow' onClick={handleMoveLeft}>
        <RiArrowLeftSLine />
      </ArrowL>
      <ArrowR className='arrow' onClick={handleMoveRight}>
        <RiArrowRightSLine />
      </ArrowR>
      <Content
        style={{
          marginLeft: scroll,
          width: items.length * 300
        }}
      >
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <Card
              key={key}
              img={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              data={item}
              type={type}
            />
          ))}
      </Content>
    </Container>
  )
}

export default Board
