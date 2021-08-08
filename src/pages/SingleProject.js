import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../data.json'
import '../style/app.css'; 

const BlogDetails = () => {
    const { id } = useParams()
    const curr = parseInt(id)
    const [project, setProject] = useState({title: 'title', description: 'description'})


    useEffect(() =>{
        {data.filter((item) =>{
            if(item.id === curr){
                const {
                    id,
                    title,
                    description
                } = item 
                const newProj = {
                    id, title, description
                }
                setProject(newProj)
            }
        })}
    }, [id])

    // useEffect(() =>{
    //     console.log(project)
    // },[project])

    const {title, description} = project

    return (
        <div>
            <h2>{title}</h2>
            <h2>suff</h2>
            <h3>{id}</h3>
            <h4>{description}</h4>
        </div>
    )
}
 
export default BlogDetails;