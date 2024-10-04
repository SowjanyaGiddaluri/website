import './../ProjectItem/ProjectItem.css';

function ProjectItem({ projectId, imageURL, title, description }) {
    return (
        <li className="project-item">
            <div className="project-item-card">
                <img src={imageURL} alt={`Project ${projectId}`} className="projectItem-image" />
                <h1 className="projectItem-heading">{title}</h1>
                <p className="projectItem-para">{description}</p>
            </div>
        </li>
    );
}

export default ProjectItem;

