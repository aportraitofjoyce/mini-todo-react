import React, {useEffect, useMemo, useState} from 'react'
import {Posts} from './components/Posts/Posts'
import {PostsAPI} from './api/posts-api'
import {Progress} from './components/UI/Progress/Progress'
import {useFetching} from './hooks/useFetching'
import {getPagesCount} from './utils/pages'
import {Pagination} from './components/UI/Pagination/Pagination'

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
    const [pagesCount, setPagesCount] = useState<number>(1)
    const [postsLimit, setPostsLimit] = useState<number>(10)
    const [currentPage, setCurrentPage] = useState<number>(1)

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

    const onPaginationPageClick = (targetPage: number) => setCurrentPage(targetPage)

    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const posts = await PostsAPI.getPosts(postsLimit, currentPage)
        setPosts(posts.data)
        const totalPostsCount = Number(posts.headers['x-total-count'])
        setPagesCount(getPagesCount(totalPostsCount, postsLimit))
    })

    useEffect(() => {
        fetchPosts()
    }, [currentPage])

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

            <Pagination pagesCount={pagesCount} currentPage={currentPage} onClick={onPaginationPageClick}/>

        </div>
    )
}