import React from 'react'
import s from './Pagination.module.css'
import {getPaginationArray} from '../../../utils/pages'

type PaginationProps = {
    pagesCount: number
    currentPage: number
    onClick: (targetPage: number) => void
}

export const Pagination: React.FC<PaginationProps> = props => {
    const {pagesCount, currentPage, onClick} = props
    const pagesArray = getPaginationArray(pagesCount)

    return (
        <div className={s.container}>
            {pagesArray.map(p => <span key={p}
                                       className={currentPage === p ? s.active : ''}
                                       onClick={() => onClick(p)}>{p}</span>)}
        </div>
    )
}