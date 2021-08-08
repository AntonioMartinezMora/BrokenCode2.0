import React from 'react'
import { useGlobalContext } from '../context';
import '../style/app.css'; 
import '../style/Searchbar.css'; 

const Searchbar = () => {
    const {setSearchTerm} = useGlobalContext()
    const searchValue = React.useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const searchProject = () => {
        setSearchTerm(searchValue.current.value)
    }

    return (
        <section className="search__cont">
            <form  
                className="search__form"
                onSubmit={handleSubmit}
            >
                <div className="input__cont">
                    <input 
                        type="text" 
                        id="name"
                        placeholder="Search for a project"
                        ref={searchValue}
                        onChange={searchProject}
                    />
                </div>
            </form>
        </section>
    )
}

export default Searchbar