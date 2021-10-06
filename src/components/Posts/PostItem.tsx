import React from 'react'
import s from './Posts.module.css'

type PostItemProps = {
    id: number
    title: string
    description: string
    index: number
    removePost: (id: number) => void
}

export const PostItem: React.FC<PostItemProps> = props => {
    const {id, title, description, index, removePost} = props

    return (
        <div className={s.itemContainer}>
            <div>
                <strong>{`#${index} ${title}`}</strong>
                <div>{description}</div>
            </div>

            <div>
                <button onClick={() => removePost(id)}>Delete</button>
            </div>
        </div>
    )
}