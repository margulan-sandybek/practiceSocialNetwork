import { configureStore } from '@reduxjs/toolkit'

import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'

// let reducers = combineReducers({
//     profilePage: profileReducer,
//     dialogsPage: dialogsReducer,
//     sidebar: sidebarReducer
// })

// let store = configureStore(reducers)

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer
    }
})

window.store = store //это чтобы в консоли браузера можно было чекать state

export default store