import {axiosInstance} from './axios-instance'
import {PostsType} from '../App'

export const postsAPI = {
    getPosts: () => axiosInstance.get<PostsType[]>('/posts?_limit=15')
        .then(response => response.data)
}