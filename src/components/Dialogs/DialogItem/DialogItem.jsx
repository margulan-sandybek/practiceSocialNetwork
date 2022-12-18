import React from 'react'
import module from '../Dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={module.dialog}>
            <NavLink to={path} className={navData => navData.isActive ? module.active : module.dialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem