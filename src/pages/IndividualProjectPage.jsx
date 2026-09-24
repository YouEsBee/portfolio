import {useParams} from "react-router-dom";
import articles from "../individual-project-content";
import {Link} from 'react-router-dom';

export default function IndividualProjectPage() {
    const {name} = useParams();

    const article = articles.find(a => a.name === name);

    return (
        <>
            <div className="dark:bg-[#1b1b1b] dark:text-white h-auto">
                <Link to='/portfolio/projects' className="text-[#6D75BB] hover:text-gray-500">&larr; All Projects</Link>
                <h1 className="py-10 font-medium text-xl md:text-3xl">{article.title}</h1>
                {article.image.map((img, index) => (
                    <img key={index} src={img} className="w-[80vh] pb-10" alt={`Image ${index}`}/>
                ))}
                {article.content.map(p => <p className="py-3" key={p}>{p}</p>)}
                <br/>
                {Object.entries(article.link).map(([key,value]) => (
                    <a href={value} key={key} name={`Link to ${key}`} className="block mb-5 text-[#6D75BB] hover:text-gray-500 pr-10" target="_blank" rel="noopener noreferrer">{key} &#8599;</a>
                ))}
            </div>
            
        </>
    );
}