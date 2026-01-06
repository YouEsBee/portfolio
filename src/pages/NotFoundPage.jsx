import {Link} from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <>
            <div class="main">
                <h1>Oops, page not found!</h1>
                <p>Perhaps you have a typo? Or we might have moved this site.</p>
                <br/><br/>
                <Link to="/portfolio">Go to Wen Kai's Portfolio Home Page</Link>
            </div>
            
        </>
    )
}