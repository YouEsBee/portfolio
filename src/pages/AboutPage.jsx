export default function AboutPage() {
    return (
        <>
            <div id="tldr" className="main tldr-about-me">
                <h2>TLDR;</h2>
                <p>
                    Looking to specialise in front-end web and mobile development!
                </p>

                <table className="proficiency-table">
                    <tr>
                        <th>Proficiency</th>
                        <th>Language</th>
                        <th>Projects</th>
                    </tr>
                    <tr>
                        <td>Intermediate</td>
                        <td>Python</td>
                        <td>PROTEEN - SUTD CTD 1D Project</td>
                    </tr>
                    <tr>
                        <td>Novice</td>
                        <td>Javascript + React</td>
                        <td>
                            <ul>
                                <li>
                                    This Website!
                                </li>
                                <li>
                                    Emcolour Me
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Novice</td>
                        <td>Swift</td>
                        <td>Epilepsy Guard</td>
                    </tr>
                </table>
            </div>

            <div id="about" className="main my-story">
                <h2>More about myself</h2>
                <p> 
                    I am an undergraduate student studying at the Singapore University of Technology and Design (SUTD).
                    Having explored the different domains within the tech industry, I have decided to specialise in software engineering.<br/><br/>
                    With technological advancements, more can be done to help others.
                    My aim is to build software that provides a good user experience and can empower others.
                    To learn more about my work experience and studies, do visit my &nbsp; 
                    <a class="about-socials" href="https://www.linkedin.com/in/teo-wen-kai-3264a91aa/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>LinkedIn
                    </a> &nbsp; page!
                    <br/><br/>
                    Fun Fact: I'm a tech enthusiast and I used to make YouTube tech videos!
                </p>
            </div>

            <div className="main">
                <h2>Want to connect?</h2>
                <p>
                    Let's talk on &nbsp;
                    <a class="about-socials" href="https://www.linkedin.com/in/teo-wen-kai-3264a91aa/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>LinkedIn
                    </a>
                    &nbsp; and contribute together on &nbsp;
                    <a class="about-socials" href="https://github.com/YouEsBee/" target="_blank">
                        <i class="fa-brands fa-github"></i>Github
                    </a>
                    !
                </p>
            </div>
        </>
        
    );
};