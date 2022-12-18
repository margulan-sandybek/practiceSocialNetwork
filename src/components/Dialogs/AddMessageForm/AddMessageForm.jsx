import React from "react"
import { Field, Form } from "react-final-form"
import { composeValidators, maxLengthCreator, required } from "../../../utils/validators/validators"
import { Textarea } from "../../common/FormsControls/FormsControls"

const AddMessageForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            component={Textarea}
                            validate={composeValidators(required, maxLengthCreator(50))}
                            name={"newMessageBody"} placeholder={"Enter your message"}
                        />
                    </div>
                    <div><button>Send</button></div>
                </form>
            )}
        />
    )
}

export default AddMessageForm