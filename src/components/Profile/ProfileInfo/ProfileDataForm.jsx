import React from "react"
import module from "./ProfileInfo.module.scss"
import { Field, Form } from "react-final-form"
import {
  composeValidators,
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators"
import { Input, Textarea } from "../../common/FormsControls/FormsControls"

const ProfileDataForm = (props) => {
  return (
    <Form
      initialValues={props.profile}
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <button>Save</button>
          </div>
          <div>
            <b>Full name:</b>
            <Field
              component={Input}
              validate={composeValidators(required, maxLengthCreator(100))}
              name={"fullName"}
              placeholder={"Full name"}
            />
          </div>
          <div>
            <b>Looking for a job:</b>
            <Field
              component={Input}
              type={"checkbox"}
              validate={composeValidators(maxLengthCreator(50))}
              name={"lookingForAJob"}
              placeholder={""}
            />
          </div>
          <div>
            <b>My professional skills:</b>
            <Field
              component={Textarea}
              validate={composeValidators(required, maxLengthCreator(200))}
              name={"lookingForAJobDescription"}
              placeholder={"My professional skills"}
            />
          </div>
          <div>
            <b>About me:</b>
            <Field
              component={Textarea}
              validate={composeValidators(required, maxLengthCreator(200))}
              name={"aboutMe"}
              placeholder={"About me"}
            />
          </div>
          <div>
            <b>Contacts:</b>{" "}
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <div className={module.contact}>
                  <b>
                    {key}:
                    <Field
                      component={Input}
                      validate={composeValidators(maxLengthCreator(100))}
                      name={"contacts." + key}
                      placeholder={key}
                    />
                  </b>
                </div>
              )
            })}
          </div>
        </form>
      )}
    />
  )
}

export default ProfileDataForm
