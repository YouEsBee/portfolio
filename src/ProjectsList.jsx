import {Link} from 'react-router-dom';

export default function ProjectsList({articles}) {
    return (
        <>
            <div>
                {articles.map(a => (
                    <div className="pb-20" key={a.name}>
                        <Link key={a.name} to={"/portfolio/projects/" + a.name}>
                            {a.image && <img src={a.image} alt={a.title} className="aspect-[18/9] md:h-[60vh] object-cover object-top"/>}
                            <h3 className="py-5 text-xl font-medium">{a.title}</h3>
                            <p className="text-[#6D75BB] hover:text-gray-500">Learn More &rarr;</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}