import React, {ChangeEvent} from 'react'
import {SortOptionsType} from '../../App'

type PostsSortProps = {
    options: SortOptionsType[]
    selectedOption: string
    onChange: (option: string) => void
}

export const PostsSort: React.FC<PostsSortProps> = props => {
    const {options, selectedOption, onChange} = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value)
    }

    return (
        <div>
            <select value={selectedOption}
                    onChange={onChangeHandler}>

                <option disabled value=''>Sort by...</option>
                {options.map(o =>
                    <option key={o.value} value={o.value}>
                        {o.title}
                    </option>)}

            </select>
        </div>
    )
}