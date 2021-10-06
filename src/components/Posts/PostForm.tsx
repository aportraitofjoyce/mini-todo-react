import React, {SyntheticEvent, useState} from 'react'
import {PostsType} from '../../App'

type PostFormProps = {
    onSubmit: (post: PostsType) => void
}

export const PostForm: React.FC<PostFormProps> = props => {
    const {onSubmit} = props

    const [post, setPost] = useState<{ title: string, description: string }>({
        title: '',
        description: ''
    })

    const onSubmitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        onSubmit({...post, id: Date.now()})
        setPost({title: '', description: ''})
    }

    return (
        <form>
            <input type='text'
                   placeholder={'Title...'}
                   value={post.title}
                   onChange={e => setPost({...post, title: e.target.value})}/>

            <input type='text'
                   placeholder={'Description...'}
                   value={post.description}
                   onChange={e => setPost({...post, description: e.target.value})}/>

            <button type={'submit'} onClick={onSubmitHandler}>Add</button>
        </form>
    )
}