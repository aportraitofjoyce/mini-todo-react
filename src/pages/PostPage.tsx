import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {PostsAPI} from '../api/posts-api'
import {PostsType} from './PostsPage'
import {useFetching} from '../hooks/useFetching'
import {Progress} from '../components/UI/Progress/Progress'

export const PostPage: React.FC = () => {
    const [post, setPost] = useState<PostsType>({id: 0, title: '', body: ''})
    const history = useHistory()
    const params = useParams<{ id: string }>()

    const [fetchPost, isLoading] = useFetching(async () => {
        const response = await PostsAPI.getPostByID(Number(params.id))
        setPost(response.data)
    })

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div>
            <button onClick={() => history.goBack()}>
                Back
            </button>

            {isLoading
                ? <Progress/>
                : <div>
                    <h1>Post Page for ID {params.id}</h1>
                    <h3>{post.title}</h3>
                    <h3>{post.body}</h3>
                </div>}
        </div>
    )
}