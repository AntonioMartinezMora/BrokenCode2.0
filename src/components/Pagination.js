import React, { useState } from 'react'
// import ReactPaginate from 'react-paginate';
import '../style/app.css'; 
import '../style/Pagination.css'; 

const Pagination = ({ postsPerPage, totalProjects, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <nav className='pagination__nav'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page__tem'>
            <a  
              onClick={() => paginate(number)}
              className='page__link'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;