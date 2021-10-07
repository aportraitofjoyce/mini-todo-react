import React from 'react'
import {PostItem} from './PostItem'
import {PostsType, SortOptionsType} from '../../App'
import {PostsSort} from './PostsSort'
import {PostsSearchForm} from './PostsSearchForm'
import {PostForm} from './PostForm'

type PostsProps = {
    posts: PostsType[]
    title: string
    removePost: (id: number) => void
    options: SortOptionsType[]
    selectedOption: string
    getSortType: (option: string) => void
    addNewPost: (post: PostsType) => void
    searchQuery: string
    getSearchQuery: (query: string) => void
}

export const Posts: React.FC<PostsProps> = props => {
    const {posts, title, removePost, options, selectedOption, addNewPost, getSortType, searchQuery, getSearchQuery} = props

    return (
        <div>
            <PostForm onSubmit={addNewPost}/>
            <h2 style={{margin: '24px 0'}}>{title}</h2>
            {posts.length === 0 && <h3>Упс, посты закончились...</h3>}

            <PostsSearchForm value={searchQuery} onChange={getSearchQuery}/>

            <PostsSort options={options}
                       selectedOption={selectedOption}
                       onChange={getSortType}/>

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