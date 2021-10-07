import React, {useMemo, useState} from 'react'
import {Posts} from './components/Posts/Posts'

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

    const [selectedOption, setSelectedOption] = useState<string>('')
    const [searchQuery, setSearchQuery] = useState<string>('')

    const getSortType = (option: string) => {
        setSelectedOption(option)
    }

    const getSearchQuery = (query: string) => {
        setSearchQuery(query)
    }

    const sortedPosts = useMemo(() => {
        if (selectedOption) {
            return [...posts]
                .sort((a: StringAsKeyHelper, b: StringAsKeyHelper) => a[selectedOption].localeCompare(b[selectedOption]))
        }
        return posts
    }, [selectedOption, posts])

    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.includes(searchQuery))
    }, [sortedPosts, searchQuery])

    const addNewPost = (post: PostsType) => {
        setPosts([...posts, post])
    }

    const removePost = (id: number) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    return (
        <div className={'app'}>
            <Posts posts={sortedAndFilteredPosts}
                   title={'Posts List #1'}
                   removePost={removePost}
                   options={options}
                   addNewPost={addNewPost}
                   selectedOption={selectedOption}
                   getSortType={getSortType}
                   searchQuery={searchQuery}
                   getSearchQuery={getSearchQuery}/>
        </div>
    )
}