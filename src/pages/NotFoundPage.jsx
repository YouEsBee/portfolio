import {Link} from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <>
            <div className="h-screen dark:bg-[#1b1b1b] dark:text-white p-20">
                <div className="py-10 text-3xl font-medium">
                    <h1>/page-not-found</h1>
                    <h1>404</h1>
                </div>
                
                <p className="py-10">
                    Nothing to see here. Have you typed the URL wrongly?
                </p>
                <Link to="/portfolio" className="text-[#6D75BB] hover:text-gray-500">
                    Return to my portfolio homepage &#x2197;
                </Link>
            </div>
            
        </>
    )
}