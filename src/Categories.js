import React from 'react';
import './style/Categories.css';

const Categories = ({categories, filterItems}) => {
    return (
        <div className="btns__container">
            {categories.map((category, index) =>{
                return(
                    <button 
                        type="button"
                        className="filter__btn"
                        key={index}
                        onClick={()=> filterItems(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories;