import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import data from '../data.json'
import Recommend from '../components/Recommend'
import '../style/app.css'; 
import '../style/SingleProject.css'

const ProjectDetails = () => {
    const { id } = useParams()
    // const curr = parseInt(id)
    const curr = id
    const [project, setProject] = useState(
        {title: 'title', 
        description: 'description'}
    )

    // console.log(index)
    useEffect(() =>{
        {data.filter((item) =>{
            if(item.id === curr){
                const {
                    id,
                    index,
                    title,
                    description,
                    image,
                    code,
                    link,
                    html,
                    css,
                    js
                } = item 
                const newProj = {
                    id, title, description, image, code, link, html, css, js
                }
                setProject(newProj)
                // console.log(index)
            }
        })}
    }, [id])

    const {title, description, image, code, link, html, css ,js} = project

    return (
        <div className="main__cont">
            <div className="page__container project__page">
                <div className="proj__img">
                    <img src={image} />
                </div>
                <div className="project__info">
                    <h1 className="card__title">
                        {title}
                    </h1>
                    <div className="skills__info">
                        <span className="info"  id="infoHtml">{html}</span>
                        <span className="info" id="infoCss">{css}</span>
                        <span className={`info ${js ? '' : 'hide'}`} id="infoJs">{js}</span>
                    </div>
                    <p className="project__descrip">
                        {description}
                    </p>
                    <div className="project__btns">
                        <a 
                            href={code} 
                            rel="noreferrer noopener" className="proj__btn" 
                            id="source__btn"
                        >
                            Download Code
                        </a>
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noreferrer noopener" className="proj__btn" 
                            id="video__btn"
                        >
                            Go to video
                        </a>
                    </div>
                </div>
            </div>
            <h3 className="secondary__title">
                You might also like:
            </h3>
            <Recommend />
        </div>
        
    )
}
 
export default ProjectDetails;