import React, {useState} from 'react'
import {PostItem} from './PostItem'
import {PostsType, SortOptionsType} from '../../App'
import {PostsSort} from './PostsSort'

type PostsProps = {
    posts: PostsType[]
    title: string
    removePost: (id: number) => void
    options: SortOptionsType[]
    sortPosts: (option: string) => void
}

export const Posts: React.FC<PostsProps> = props => {
    const {posts, title, removePost, options, sortPosts} = props

    return (
        <div>
            <h2 style={{margin: '24px 0'}}>{title}</h2>
            {posts.length === 0 && <h3>Упс, посты закончились...</h3>}

            <PostsSort options={options} onChange={sortPosts}/>

            {posts.map((p, i) =>
                <PostItem key={p.id}
                          id={p.id}
                          title={p.title}
                          description={p.description}
                          index={i + 1}
                          removePost={removePost}/>)}
        </div>
    )
}