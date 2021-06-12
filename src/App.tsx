import { ReactElement } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '@pages/Home'
import Common from '@pages/Common'
import Contacts from '@pages/Contacts'
import Mobx from '@pages/Mobx'
import Header from '@components/Header'
import Footer from '@components/Footer'

export const App = (): ReactElement => (
  <Router>
    <Header />

    <main className="flex-1">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/common' component={Common} />
        <Route exact path='/mobx' component={Mobx} />
        <Route exact path='/contacts' component={Contacts} />
      </Switch>
    </main>

    <Footer />
  </Router>
)
