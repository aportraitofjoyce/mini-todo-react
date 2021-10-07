import {HomePage} from '../pages/HomePage'
import {FunctionComponent} from 'react'
import {PostsPage} from '../pages/PostsPage'
import {PostPage} from '../pages/PostPage'
import {Login} from '../pages/Login'

export enum PATH {
    home = '/home',
    posts = '/posts',
    post = '/posts/:id',
    login = '/login'
}

type RoutesType = {
    path: string
    component: FunctionComponent
    exact: boolean
}

export const privateRoutes: RoutesType[] = [
    {path: PATH.home, component: HomePage, exact: true},
    {path: PATH.posts, component: PostsPage, exact: true},
    {path: PATH.post, component: PostPage, exact: true},
]

export const publicRoutes: RoutesType[] = [
    {path: PATH.home, component: HomePage, exact: true},
    {path: PATH.login, component: Login, exact: true},
]