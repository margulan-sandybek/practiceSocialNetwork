import React, { Suspense } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import HeaderContainer from './components/Header/HeaderContainer'
import UsersContainer from './components/Users/UsersContainer'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './components/Login/Login'
import Preloader from './components/common/Preloader/Preloader'
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component { //тут у Димы написано просто Component
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route
                path='/dialogs/*'
                element={<DialogsContainer />}
              />

              <Route path='/profile/' element={<ProfileContainer />} >
                <Route path=':userId/*' element={<ProfileContainer />} />
              </Route>

              <Route
                path='/users/'
                element={<UsersContainer />}
              />

              <Route
                path='/login/'
                element={<LoginPage />}
              />

            </Routes>
          </Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App)