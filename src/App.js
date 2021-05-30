import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Common from './pages/Common.jsx'
import Contacts from './pages/Contacts.jsx'
import Mobx from './pages/Mobx.jsx'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />

      <main>
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
}

export default App
