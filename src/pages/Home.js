import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../context'; 
import '../style/app.css'; 
import Projects from '../components/Projects';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination'


function Home() {
  const {categories, filterItems, projectsList, currentPosts, postsPerPage, totalProjects, paginate} = useGlobalContext()


  return<main>
        <Categories categories={categories} filterItems={filterItems}/>
        <Projects items={projectsList}/>
    </main>
  
} 

export default Home;
