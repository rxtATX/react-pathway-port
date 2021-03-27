const Card = ({ project }) => {
    return (
        <div className="card">
            <a className="link" target="_blank" href={project.repo}>🔗</a>
            <a href={project.url} target="_blank">
                <p className="title">{project.name}</p>
            </a>
            <p className="desc">{project.desc}</p>
        </div>
    )
}

export default Card;