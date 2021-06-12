import { NavLink } from 'react-router-dom'

const Footer = () => (
  <footer className="bg-gray-900 flex justify-center items-center">
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
