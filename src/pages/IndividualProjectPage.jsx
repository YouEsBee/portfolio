import {useParams} from "react-router-dom";
import articles from "../individual-project-content";
import {Link} from 'react-router-dom';

export default function IndividualProjectPage() {
    const {name} = useParams();

    const article = articles.find(a => a.name === name);

    return (
        <>
            <div className="main">
                <Link to='/portfolio/projects' class="btn-proj-back">&larr; All Projects</Link>
                <h1 className="proj-desc">{article.title}</h1>
                {article.image.map((img, index) => (
                    <img key={index} src={img} className="proj-img" alt={`Image ${index}`}/>
                ))}
                {article.content.map(p => <p className="proj-desc" key={p}>{p}</p>)}
                <br/>
                {Object.entries(article.link).map(([key,value]) => (
                    <a href={value} key={key} className="btn-learn" target="_blank" rel="noopener noreferrer">{key}</a>
                ))}
            </div>
            
        </>
    );
}