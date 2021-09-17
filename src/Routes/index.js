import Browse from 'Pages/Browse'
import ProviderNF from 'Pages/Error/ProviderNF'
import Home from 'Pages/Home'
import Movies from 'Pages/Movies'
import Search from 'Pages/Search'
import Trending from 'Pages/Trending'
import Tv from 'Pages/Tv'
import { Switch, HashRouter, Route } from 'react-router-dom'

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/browse/:type/:id/' exact component={Browse} />
        <Route path='/movies' exact component={Movies} />
        <Route path='/trending' exact component={Trending} />
        <Route path='/tv' exact component={Tv} />
        <Route path='/error/404p' exact component={ProviderNF} />
        <Route path='/search/:find' exact component={Search} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
