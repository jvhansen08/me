import { Project } from "../components/Project";
import { ProjectProps } from "../types/Types";
import { ProjectList } from "../utils/HelperFunctions"

export function Projects() {
    const projects = ProjectList();

    return(
        <>
            <h1>Projects page</h1>
            <div className="projects-container">
                {projects.map((proj: ProjectProps, index: number) => (
                    <div key={index}>
                        <Project
                            {...proj}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}