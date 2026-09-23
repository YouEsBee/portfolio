import ProjectsList from "../ProjectsList";
import articles from "../individual-project-content";

export default function ProjectPage() {
    return (
        <>
            <div className="dark:bg-[#1b1b1b] dark:text-white">
                <h1 className="text-3xl pb-10 font-medium">/Projects</h1>
                <ProjectsList articles={articles} />
            </div>
        </>
    );
}