import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import Contacts from './pages/Contacts'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/contacts' component={Contacts} />
        </Switch>
      </main>

      <Footer />
    </Router>
  )
}

export default App
