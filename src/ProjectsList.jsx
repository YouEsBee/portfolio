import {Link} from 'react-router-dom';

export default function ProjectsList({articles}) {
    return (
        <>
            <div className="proj-link-container">
                {articles.map(a => (
                    <div className="proj-link-div" key={a.name}>
                        <Link key={a.name} to={"/portfolio/projects/" + a.name} className="proj-link">
                            {a.image && <img src={a.image} alt={a.title} className="proj-link-img"/>}
                            <h3 class="proj-title">{a.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}