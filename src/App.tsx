import React, {useState} from 'react'
import {Posts} from './components/Posts/Posts'
import {PostForm} from './components/Posts/PostForm'

export type PostsType = {
    id: number
    title: string
    description: string
}

export type SortOptionsType = {
    value: string
    title: string
}

type StringAsKeyHelper = {
    [index: string]: any
}

export const App: React.FC = () => {
    const [posts, setPosts] = useState<PostsType[]>([
        {id: 1, title: 'dfhTitle', description: '65Some description'},
        {id: 2, title: 'kmhTitle', description: '2Some description'},
        {id: 3, title: 'ghkTitle', description: '4Some description'},
        {id: 4, title: 'Title', description: '6Some description'},
    ])

    const options: SortOptionsType[] = [
        {value: 'title', title: 'Sort by title'},
        {value: 'description', title: 'Sort by description'}
    ]

    const sortPosts = (option: string) => {
        setPosts([...posts]
            .sort((a: StringAsKeyHelper, b: StringAsKeyHelper) => a[option].localeCompare(b[option])))
    }

    const addNewPost = (post: PostsType) => {
        setPosts([...posts, post])
    }

    const removePost = (id: number) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    return (
        <div className={'app'}>
            <PostForm onSubmit={addNewPost}/>
            <Posts posts={posts}
                   title={'Posts List #1'}
                   removePost={removePost}
                   options={options}
                   sortPosts={sortPosts}/>
        </div>
    )
}