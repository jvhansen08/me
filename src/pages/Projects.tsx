import { Project } from "../components/Project";
import { ProjectProps } from "../types/Types";
import { ProjectList } from "../utils/HelperFunctions"

export function Projects() {
    const projects = ProjectList();

    return(
        <div className="outline-letters">
            <h1>Projects</h1>
            <h3 style={{paddingBottom: "30px", fontSize: "20px" }}>Hover over any image to learn more.</h3>
            <div className="projects-container">
                {projects.map((proj: ProjectProps, index: number) => (
                    <div key={index}>
                        <Project
                            {...proj}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}