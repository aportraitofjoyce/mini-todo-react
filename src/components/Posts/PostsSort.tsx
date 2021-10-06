import React, {ChangeEvent, useState} from 'react'
import {SortOptionsType} from '../../App'

type PostsSortProps = {
    options: SortOptionsType[]
    onChange: (option: string) => void
}

export const PostsSort: React.FC<PostsSortProps> = props => {
    const {options, onChange} = props
    const [selectedOption, setSelectedOption] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value)
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