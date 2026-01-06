import ProjectsList from "../ProjectsList";
import articles from "../individual-project-content";

export default function ProjectPage() {
    return (
        <>
            <div className="main">
                <h1 class="proj-link">Projects</h1>
                <ProjectsList articles={articles} />
            </div>
        </>
    );
}