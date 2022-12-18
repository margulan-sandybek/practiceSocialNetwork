import React from 'react'
import { NavLink } from 'react-router-dom'
import module from './Navbar.module.scss'

const Navbar = (props) => {
  return (
    <nav className={module.nav}>
      <div className={module.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? module.active : module.item}>Profile</NavLink>
      </div>
      <div className={module.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? module.active : module.item}>Messages</NavLink>
      </div>
      <div className={module.item}>
        <NavLink to="/users" className={navData => navData.isActive ? module.active : module.item}>Users</NavLink>
      </div>
      <div className={module.item}>
        <NavLink to="/news" className={navData => navData.isActive ? module.active : module.item}>News</NavLink>
      </div>
      <div className={module.item}>
        <NavLink to="/music" className={navData => navData.isActive ? module.active : module.item}>Music</NavLink>
      </div>
      <div className={module.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? module.active : module.item}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar