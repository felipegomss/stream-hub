import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { RiMenu4Fill, RiCloseLine } from 'react-icons/ri'

import {
  Container,
  Button,
  Form,
  TxtDk,
  TxtMob,
  Links,
  Nav,
  Search,
  Input,
  Back
} from './styles'

function Header() {
  const [menu, setMenu] = useState({
    display: 'none'
  })
  const [search, setSearch] = useState({
    display: 'none'
  })
  const [nav, setNav] = useState({
    display: 'flex'
  })
  const [state, setState] = useState(false)
  const [stateNav, setStateNav] = useState(false)

  const showMenu = () => {
    if (state === false) {
      setMenu({
        display: 'flex'
      })
      setState(true)
    } else {
      setMenu({
        display: 'none'
      })
      setState(false)
    }
  }
  const showInput = () => {
    if (stateNav === false) {
      setSearch({
        display: 'flex'
      })
      setNav({
        display: 'none'
      })
      setStateNav(true)
    } else {
      setSearch({
        display: 'none'
      })
      setNav({
        display: 'flex'
      })
      setStateNav(false)
    }
  }

  return (
    <Nav>
      <Container>
        <a href='/'>
          <TxtDk>Streamhub</TxtDk>
          <TxtMob>SH</TxtMob>
        </a>
        <Form>
          <Button onClick={showMenu}>
            <RiMenu4Fill />
          </Button>
        </Form>
      </Container>
      <Back />
      <Links style={menu}>
        <div style={nav}>
          <a href='/#/movies'>Movies</a>-<a href='/#/tv'>TV Shows</a>
        </div>
        <Input placeholder='Search a movie or TV show' style={search} />
        <Search onClick={showInput} style={nav}>
          <GoSearch />
        </Search>
        <Search onClick={showInput} style={search}>
          <RiCloseLine />
        </Search>
      </Links>
    </Nav>
  )
}

export default Header
