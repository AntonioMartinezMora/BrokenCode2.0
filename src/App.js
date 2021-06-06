import React, {useEffect, useState} from 'react';
import Projects from './Projects';
import Categories from './Categories';
import './style/app.css';
import data from './data.json'

const allCategories = ['all', ...new Set(data.map((item)=> item.category))];

function App() {
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

  return <main>
    <h2>Broken Code</h2>
    <Categories categories={categories} filterItems={filterItems}/>
    <Projects items={projectsList}/>
  </main>
}

export default App;
