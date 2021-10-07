import React, {ChangeEvent} from 'react'

type PostsSearchFormProps = {
    value: string
    onChange: (query: string) => void
}

export const PostsSearchForm: React.FC<PostsSearchFormProps> = props => {
    const {value, onChange} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div>
            <input type='text'
                   placeholder={'Search'}
                   value={value}
                   onChange={onChangeHandler}/>
        </div>
    )
}