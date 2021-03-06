import React from 'react'
import s from './Posts.module.css'
import {PostItem} from './PostItem'
import {PostForm} from './PostForm'
import {PostsFilter} from './PostsFilter'
import {Modal} from '../UI/Modal/Modal'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {FilterType, PostsType, SortOptionsType} from '../../pages/PostsPage'

type PostsProps = {
    posts: PostsType[]
    title: string
    removePost: (id: number) => void
    options: SortOptionsType[]
    addNewPost: (post: PostsType) => void
    filter: FilterType
    setFilter: (filter: FilterType) => void
    modalVisible: boolean
    setModalVisible: (modalVisible: boolean) => void
}

export const Posts: React.FC<PostsProps> = props => {
    const {
        posts,
        title,
        removePost,
        options,
        addNewPost,
        filter,
        setFilter,
        modalVisible,
        setModalVisible
    } = props

    return (
        <div>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm onSubmit={addNewPost}/>
            </Modal>

            <h1>{title}</h1>
            <button onClick={() => setModalVisible(true)} style={{marginBottom: 24}}>Add post</button>

            <PostsFilter options={options}
                         filter={filter}
                         setFilter={setFilter}/>

            <TransitionGroup>
                {posts.map(p =>
                    <CSSTransition key={p.id}
                                   timeout={500}
                                   classNames={{
                                       enter: s.postAnimationEnter,
                                       enterActive: s.postAnimationEnterActive,
                                       exit: s.postAnimationExit,
                                       exitActive: s.postAnimationExitActive
                                   }}>
                        <PostItem post={p}
                                  removePost={removePost}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

            {!posts.length && <h3>??????, ?????????? ??????????????????????...</h3>}
        </div>
    )
}