import { Link } from 'react-router-dom';
import { Typewriter } from '../siteFeatures';

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-40 dark:bg-[#1B1B1B]">
            <Typewriter/>
            <Link className="dark:text-white hover:text-gray-500" to='/portfolio/projects'>
                View My Projects &rarr;
            </Link>
        </div>
    );
};

