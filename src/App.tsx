import React, {SyntheticEvent, useState} from 'react'
import {Posts} from './components/Posts/Posts'
import {PostForm} from './components/Posts/PostForm'

export type PostsType = {
    id: number
    title: string
    description: string
}

export const App: React.FC = () => {
    const [posts, setPosts] = useState<PostsType[]>([
        {id: 1, title: 'Title', description: 'Some description'},
        {id: 2, title: 'Title', description: 'Some description'},
        {id: 3, title: 'Title', description: 'Some description'},
        {id: 4, title: 'Title', description: 'Some description'},
    ])

    const addNewPost = (post: PostsType) => {
        setPosts([...posts, post])
    }

    return (
        <div className={'app'}>
            <PostForm onSubmit={addNewPost}/>
            <Posts posts={posts} title={'Posts List #1'}/>
        </div>
    )
}