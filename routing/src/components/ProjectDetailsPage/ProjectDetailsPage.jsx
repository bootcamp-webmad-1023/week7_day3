import { useParams } from "react-router-dom"
import projectsData from './../../projects-data.json'
import { useEffect, useState } from "react"

const ProjectDetailsPage = () => {

    const { project_id } = useParams()
    const [project, setProject] = useState()

    // el hook useEffect asocia efectos a fases del componente
    useEffect(() => {
        const selectedProject = projectsData.find(elm => elm._id === project_id)
        setProject(selectedProject)
    }, [])              // array vacío = efecto de montaje

    return (
        project
            ?
            <>
                <h1>Detalles de proyecto con ID {project_id}</h1>
                <hr />
                <p>Se llama {project.name} y tal</p>
            </>
            :
            <h1>CARGANDO....</h1>
    )
}

export default ProjectDetailsPage