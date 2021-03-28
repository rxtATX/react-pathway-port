const Project = ({ project }) => {
    return (
        <div className="card">
            <a className="link" rel="noreferrer" target="_blank" href={project.repo}>🔗</a>
            <a href={project.url} rel="noreferrer" target="_blank">
                <p className="title">{project.name}</p>
            </a>
            <p className="desc">{project.desc}</p>
        </div>
    )
}

export default Project;