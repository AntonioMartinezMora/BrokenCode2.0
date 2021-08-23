import React from 'react';
import {Link} from 'react-router-dom'
import '../style/Projects.css';
// import { useGlobalContext } from '../context'; 

const Projects = ({items}) => {
  if(items.length < 1){
      return (
          <div className="list__container err__container">
            <h2>
                No matches found for your search
            </h2>
          </div>
      )
  }

  return (
  <div className="list__container page__container">
      {items.sort((a,b) => 0.5 - Math.random()).map((project) => {
        const {id, title, image, html, css, js} = project;
        console.log(items.sort((a,b) => b - a))
        return<Link 
            to={`/project/${id}`} 
            className="card" key={id}
            // onClick={displayProject}
        >
            <div className="card__img"> 
                <img src={image} className="card__thum" />
            </div>
            <div className="card__content">
                <h1 className="card__title">{title}</h1>
                <div className="tut__info--container">
                    <div className="tut__info">
                        <span className="info"  id="infoHtml">{html}</span>
                        <span className="info" id="infoCss">{css}</span>
                        <span className={`info ${js ? '' : 'hide'}`} id="infoJs">{js}</span>
                    </div>
                </div>
            </div>
        </Link>
      })}
  </div>
  );
};

export default Projects;