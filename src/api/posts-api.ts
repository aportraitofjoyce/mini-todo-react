import {axiosInstance} from './axios-instance'
import {PostsType} from '../pages/PostsPage'

export class PostsAPI {
    static getPosts = async (limit: number = 10, page: number = 1) => {
        return await axiosInstance.get<PostsType[]>('/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
    }

    static getPostByID = async (id: number) => {
        return await axiosInstance.get<PostsType>(`/posts/${id}`)
    }
}