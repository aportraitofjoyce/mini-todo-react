import React from 'react'
import s from './Posts.module.css'
import {PostsType} from '../../App'

type PostItemProps = {
    post: PostsType
    removePost: (id: number) => void
}

export const PostItem: React.FC<PostItemProps> = props => {
    const {post, removePost} = props

    return (
        <div className={s.itemContainer}>
            <div>
                <strong>#{post.id} - {post.title}</strong>
                <div>{post.body}</div>
            </div>

            <div>
                <button onClick={() => removePost(post.id)}>Delete</button>
            </div>
        </div>
    )
}