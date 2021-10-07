import React, {useEffect, useMemo, useState} from 'react'
import {Posts} from './components/Posts/Posts'
import {postsAPI} from './api/posts-api'
import {Progress} from './components/UI/Progress/Progress'
import {useFetching} from './hooks/useFetching'

export type PostsType = {
    id: number
    title: string
    body: string
}

export type SortOptionsType = {
    value: string
    title: string
}

type StringAsKeyHelper = {
    [index: string]: any
}

export type FilterType = {
    sort: string
    search: string
}

export const App: React.FC = () => {
    const [posts, setPosts] = useState<PostsType[]>([])
    const options: SortOptionsType[] = [
        {value: 'title', title: 'Sort by title'},
        {value: 'body', title: 'Sort by description'}
    ]
    const [filter, setFilter] = useState<FilterType>({sort: '', search: ''})
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) return [...posts]
            .sort((a: StringAsKeyHelper, b: StringAsKeyHelper) => a[filter.sort].localeCompare(b[filter.sort]))
        return posts
    }, [filter.sort, posts])

    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLocaleLowerCase().includes(filter.search))
    }, [sortedPosts, filter.search])

    const addNewPost = (post: PostsType) => {
        setPosts([...posts, post])
        setModalVisible(false)
    }

    const removePost = (id: number) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const posts = await postsAPI.getPosts()
        setPosts(posts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className={'app'}>
            {isLoading
                ? <Progress/>
                : <Posts posts={sortedAndFilteredPosts}
                         title={'Posts List #1'}
                         removePost={removePost}
                         options={options}
                         addNewPost={addNewPost}
                         filter={filter}
                         setFilter={setFilter}
                         modalVisible={modalVisible}
                         setModalVisible={setModalVisible}/>}

        </div>
    )
}