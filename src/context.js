import React, {useEffect, useState, useContext} from 'react';
import data from './data.json'

const AppContext = React.createContext()

const allCategories = ['all', ...new Set(data.map((item)=> item.category))];

const AppProvider = ({children}) => {
    const [projectsList, setProjectList] = useState(data);
    const [categories, setCategories] = useState(allCategories);
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(12) 
  
    // Categories Filter
    const filterItems = (category) => {
      if(category === "all"){
        setProjectList(data);
        return;
      }
  
      const newItems = data.filter((item) => 
      item.category === category)
      setProjectList(newItems);
    }

    // Search Box
    useEffect(() => {
      const newProjects = data.filter((value) =>{
      if(value.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return value
        }
      })
      setProjectList(newProjects)
    },[searchTerm])

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = projectsList.slice(indexOfFirstPost, indexOfLastPost)
    const totalProjects = data.length

    return <AppContext.Provider value={{
        filterItems,
        categories,
        projectsList,
        setSearchTerm,
        currentPosts,
        postsPerPage,
        totalProjects
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}