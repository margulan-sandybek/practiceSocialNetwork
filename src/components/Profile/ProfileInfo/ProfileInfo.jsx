import React, { useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import module from './ProfileInfo.module.scss'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <div className={module.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={module.mainPhoto} />
                {
                    props.isOwner &&
                    <input
                        type={"file"}
                        onChange={onMainPhotoSelected}
                    />
                }

                {editMode
                    ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit} />
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}

                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner &&
                <div>
                    <button onClick={props.goToEditMode}>Edit</button>
                </div>
            }
            <div>
                <b>Full name:</b> {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                    return (
                        <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />
                    )
                })}
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={module.contact}>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

export default ProfileInfo