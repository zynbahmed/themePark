import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Parks</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/theme">Theme Park</NavLink>
        <NavLink to="/water">Water Park</NavLink>
        <NavLink to="/newThemePark">Add Theme Park</NavLink>
        <NavLink to="/newWaterPark">Add Water Park</NavLink>
      </div>
    </nav>
  )
}

export default Nav
