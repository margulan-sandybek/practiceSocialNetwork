import React from 'react'
import module from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={module.item}>
            <img src="https://seeklogo.com/images/L/los-angeles-lakers-logo-805BBEB14F-seeklogo.com.png" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post