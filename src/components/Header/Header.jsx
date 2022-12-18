import React from 'react'
import module from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={module.header}>
      <img src="https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700" alt="NBA logo" />

      <div className={module.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header