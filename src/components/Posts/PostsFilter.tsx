import React from 'react'
import {PostsSearchForm} from './PostsSearchForm'
import {PostsSort} from './PostsSort'
import {FilterType, SortOptionsType} from '../../pages/PostsPage'

type PostsFilterProps = {
    options: SortOptionsType[]
    filter: FilterType
    setFilter: (filter: FilterType) => void
}

export const PostsFilter: React.FC<PostsFilterProps> = props => {
    const {options, filter, setFilter} = props

    const getSortType = (sort: string) => {
        setFilter({...filter, sort})
    }

    const getSearchQuery = (search: string) => {
        setFilter({...filter, search})
    }

    return (
        <div>
            <PostsSearchForm value={filter.search} onChange={getSearchQuery}/>
            <PostsSort options={options}
                       selectedOption={filter.sort}
                       onChange={getSortType}/>
        </div>
    )
}