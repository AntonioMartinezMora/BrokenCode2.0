import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../style/Projects.css';
import { useGlobalContext } from '../context'; 

const Recommend = () => {
    const {projectsList} = useGlobalContext()
    const [width, setWidth] = useState(window.innerWidth)
    const [numItems, setNumItems] = useState(-4)

    useEffect(() =>{
        const handleResize = () =>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        // console.log(width)
        if(width > 1200){
            setNumItems(-4)
        }
        if(width < 1200 && width > 800){
            setNumItems(-3)
        }
        if(width < 800 && width > 550){
            setNumItems(-2)
        }
        if(width < 500){
            setNumItems(-1)
        }
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[width])



    return (
    <div className="list__container page__container">
        {projectsList.slice(numItems).sort((a,b) => 0.5 - Math.random()).map((project) => {
            const {id, title, image, html, css, js} = project;
            return<Link 
                to={`/project/${id}`} 
                className="card" key={id}
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

export default Recommend;