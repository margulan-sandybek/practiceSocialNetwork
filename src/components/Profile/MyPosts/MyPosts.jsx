import React from 'react'
import { Field, Form } from 'react-final-form'
import { composeValidators, maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import module from './MyPosts.module.scss'
import Post from './Post/Post'

let AddNewPostForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={"newPostText"} component={Textarea} placeholder={"Post message"}
                            validate={composeValidators(required, maxLengthCreator(10))}
                        />
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </form>
            )}
        />
    )
}

const MyPosts = React.memo((props) => {
    console.log("RENDER")
    console.log(props)

    let postsElements = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount} />
    )

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={module.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={module.posts}>
                {postsElements}
            </div>

        </div>
    )
})

export default MyPosts