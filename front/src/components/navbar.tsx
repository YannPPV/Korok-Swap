import { NavLink } from 'react-router'

export function NavBar() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/encyclopedia">Encyclopedia</NavLink>
    </nav>
  )
}
