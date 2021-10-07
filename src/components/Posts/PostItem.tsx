import React from 'react'
import s from './Posts.module.css'
import {PostsType} from '../../pages/PostsPage'
import {useHistory} from 'react-router-dom'
import {PATH} from '../../routes/routes'

type PostItemProps = {
    post: PostsType
    removePost: (id: number) => void
}

export const PostItem: React.FC<PostItemProps> = props => {
    const {post, removePost} = props
    const history = useHistory()

    return (
        <div className={s.itemContainer}>
            <div>
                <strong>#{post.id} - {post.title}</strong>
                <div>{post.body}</div>
            </div>

            <div className={s.buttonsContainer}>
                <button onClick={() => history.push(`${PATH.posts}/${post.id}`)}>Open</button>
                <button onClick={() => removePost(post.id)}>Delete</button>
            </div>
        </div>
    )
}