export const getPagesCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
}

export const getPaginationArray = (pagesCount: number) => {
    const pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    return pagesArray
}