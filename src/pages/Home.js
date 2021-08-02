import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../context'; 
import '../style/app.css'; 
import Projects from '../components/Projects';
import Categories from '../components/Categories';


function Home() {
  const {categories, filterItems, projectsList} = useGlobalContext()

  return<main>
        <h2>Broken Code</h2>
        <Categories categories={categories} filterItems={filterItems}/>
        <Projects items={projectsList}/>
    </main>
  
} 

export default Home;
