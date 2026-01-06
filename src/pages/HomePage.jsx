import { Link } from 'react-router-dom';

export default function HomePage() {
    const BASE_URL = import.meta.env.BASE_URL;

    return (
        <div className="main photo-name">
            <div className="name-link">
                <p className="home-desc">
                    Hi, I'm Wen Kai.
                </p>
                <p className="home">
                    <span className="home-highlight">Front-End</span> Development
                </p>
                <p className="home-desc">
                    is my specialisation.
                </p>
                <p className="home-desc-para">
                    I hope to build products that empower others. <br/>
                    Take a look at what I have built over the past few years!
                </p>

                <Link className="btn-my-proj" to='/portfolio/projects'>
                    My Projects &rarr;
                </Link>
            </div>            
            <img src={`${import.meta.env.BASE_URL}/public/Images/photo_WK.jpeg`} className="twk-photo" alt="Teo Wen Kai's Photo" height="300" width="300"/>
        </div>
    );
};

