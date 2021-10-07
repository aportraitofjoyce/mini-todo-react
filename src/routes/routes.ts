import {HomePage} from '../pages/HomePage'
import {FunctionComponent} from 'react'
import {PostsPage} from '../pages/PostsPage'
import {PostPage} from '../pages/PostPage'

export enum PATH {
    home = '/home',
    posts = '/posts',
    post = '/posts/:id'
}

type RoutesType = {
    path: string
    component: FunctionComponent
    exact: boolean
}

export const routes: RoutesType[] = [
    {path: PATH.home, component: HomePage, exact: true},
    {path: PATH.posts, component: PostsPage, exact: true},
    {path: PATH.post, component: PostPage, exact: true},
]