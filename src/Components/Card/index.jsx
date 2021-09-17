/* eslint-disable react/prop-types */
import { Container, Content } from './styles'

function Card({ img, data }) {
  console.log(data.media_type)
  return (
    <Container href={`/#/browse/${data.media_type}/${data.id}`}>
      <Content>
        <img src={img} />
      </Content>
    </Container>
  )
}

export default Card
