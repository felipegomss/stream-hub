import { Button } from 'Pages/Home/styles'

import { Container } from './styles'

function ProviderNF() {
  return (
    <Container>
      <div>
        <h1>Sorry, we couldn&apos;t find a provider for this service.</h1>
        <Button href='/'>home</Button>
      </div>
    </Container>
  )
}

export default ProviderNF
