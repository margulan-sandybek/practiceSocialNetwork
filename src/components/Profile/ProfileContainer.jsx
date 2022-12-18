import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getStatus, getUserProfile, savePhoto, updateStatus } from '../../redux/profile-reducer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

let withUrlDataContainerComponent = (Component) => {
    let ComponentWithRouterProp = (props) => {
        return (
            <Component
                {...props}
                params={useParams()}
                navigate={useNavigate()}
                location={useLocation()}
            />
        )
    }
    return ComponentWithRouterProp
}

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            // if(!userId) {
            //     this.props.history.push("/login") // так было у Димы в 2019, ща это через this.props.navigate("/login"), но это впринципе и не надо, так как с withAuthRedirect все работает
            // }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.params.userId != prevProps.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withUrlDataContainerComponent,
    withAuthRedirect
)(ProfileContainer)