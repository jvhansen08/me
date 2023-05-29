import { ProjectProps } from "../types/Types";

export function Project(props: ProjectProps) {
    return (
        <div className="project-container">
            <div className="project-img-div">
                <img src={props.imgSrc} alt={props.imgAlt} width={300} className="project-img" />
            </div>
            <div className="project-overlay">
                <div className="project-text">{props.description}</div>
                <a href={props.sourceCodeLink} target="page">
                    <button>View Source Code</button>
                </a>
                {props.productLink &&
                    <a href={props.productLink} target="page">
                        <button>View Product</button>
                    </a>
                }
            </div>
        </div>
    )
}