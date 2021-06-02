import React from 'react'

function Pagenation(props) {
    const { postsPerPage, totalPosts, paginate} = props
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((pageNumber) => {
                    return <li key={pageNumber} className='page-item'>
                        <a onClick={() => paginate(pageNumber)} className='page-link' href={`#${pageNumber}`}>{pageNumber}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagenation
