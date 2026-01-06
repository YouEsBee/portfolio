import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <ul class="navbar">
                <li class="left">
                    <Link to='/portfolio'>TEO WEN KAI</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Home</Link>
                </li>
                <li>
                    <Link to='/portfolio/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/portfolio/about'>About</Link>
                </li>
                <li class="github right">
                    <a href="https://github.com/YouEsBee/" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </li>
                <li class="linkedin right">
                    <a href="https://www.linkedin.com/in/teo-wen-kai-3264a91aa/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li class="dribbble right">
                    <a href="https://dribbble.com/awesomeeeee" target="_blank">
                        <i class="fa-brands fa-dribbble"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}