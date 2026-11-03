import { Outlet } from 'react-router'
import { NavBar } from './navbar'
function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  )
}

export default Layout
