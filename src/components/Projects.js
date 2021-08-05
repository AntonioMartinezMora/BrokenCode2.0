import React from 'react';
import {Link} from 'react-router-dom'
import '../style/Projects.css';
import { useGlobalContext } from '../context'; 

const Projects = ({items}) => {
    const {displayProject} = useGlobalContext()

  return (
  <div className="list__container">
      {items.sort((a,b) => 0.5 - Math.random()).map((project) => {
        const {id, title, background, html, css, js} = project;
        return<Link 
            to={`/project/${id}`} 
            className="card" key={id}
            onClick={displayProject}
        >
            <div className="card__img"> 
                <img src={background} className="card__thum" />
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