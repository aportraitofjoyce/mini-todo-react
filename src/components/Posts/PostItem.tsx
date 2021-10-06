import React from 'react'
import s from './Posts.module.css'
import {Button} from '../UI/Button/Button'

type PostItemProps = {
    id: number
    title: string
    description: string
    index: number
}

export const PostItem: React.FC<PostItemProps> = props => {
    const {children, id, title, description, index} = props

    return (
        <div className={s.itemContainer}>
            <div>
                <strong>{`#${index} ${title}`}</strong>
                <div>{description}</div>
            </div>

            <div>
                <Button>Delete</Button>
            </div>
        </div>
    )
}