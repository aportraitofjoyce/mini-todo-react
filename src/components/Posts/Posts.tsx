import React from 'react'
import {PostItem} from './PostItem'
import {PostsType} from '../../App'

type PostsProps = {
    posts: PostsType[]
    title: string
}

export const Posts: React.FC<PostsProps> = props => {
    const {posts, title} = props


    return (
        <div>
            <h2 style={{marginBottom: 24}}>{title}</h2>
            {posts.map((p, i) => <PostItem key={p.id} id={p.id} title={p.title}
                                      description={p.description} index={i+1}/>)}
        </div>
    )
}