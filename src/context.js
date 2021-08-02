import React, {useEffect, useState, useContext} from 'react';
import data from './data.json'

const AppContext = React.createContext()

const allCategories = ['all', ...new Set(data.map((item)=> item.category))];

const AppProvider = ({children}) => {
    const [projectsList, setProjectList] = useState(data);
    const [categories, setCategories] = useState(allCategories);
  
    const filterItems = (category) => {
      if(category === "all"){
        setProjectList(data);
        return;
      }
  
      const newItems = data.filter((item) => 
      item.category === category)
      setProjectList(newItems);
    }

    return <AppContext.Provider value={{
        filterItems,
        categories,
        projectsList
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}