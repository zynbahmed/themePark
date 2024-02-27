import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Starboard</h4>
      <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Listings">Listings</NavLink>
      <NavLink to="/new" >Add Boat</NavLink>
      </div>
    </nav>
  )
}

export default Nav
