import { NavLink } from 'react-router-dom'

const Footer = () => (
  <footer>
    <span>Made by </span>

    <NavLink
      to={'/'}
      exact
      style={{ padding: '0 4px' }}
    >Roman</NavLink>

    <span> with ❤️</span>
  </footer>
)

export default Footer
