import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <NavLink
      to={'/'}
      exact
    >Home</NavLink>

    <NavLink
      to={'/common'}
      exact
    >Common</NavLink>

    <NavLink
      to={'/contacts'}
      exact
    >Contacts</NavLink>
  </header>
)

export default Header
