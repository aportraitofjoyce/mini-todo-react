import React, {SyntheticEvent, useState} from 'react'
import {PostsType} from '../../pages/PostsPage'

type PostFormProps = {
    onSubmit: (post: PostsType) => void
}

export const PostForm: React.FC<PostFormProps> = props => {
    const {onSubmit} = props

    const [newPost, setNewPost] = useState<{ title: string, body: string }>({
        title: '',
        body: ''
    })

    const onSubmitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        onSubmit({...newPost, id: Date.now()})
        setNewPost({title: '', body: ''})
    }

    return (
        <form>
            <input type='text'
                   placeholder={'Title...'}
                   value={newPost.title}
                   onChange={e => setNewPost({...newPost, title: e.target.value})}/>

            <input type='text'
                   placeholder={'Description...'}
                   value={newPost.body}
                   onChange={e => setNewPost({...newPost, body: e.target.value})}/>

            <button type={'submit'} onClick={onSubmitHandler}>Add</button>
        </form>
    )
}