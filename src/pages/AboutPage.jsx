export default function AboutPage() {
    return (
        <>
            <div id="about" className="dark:bg-[#1b1b1b] dark:text-white">
                <h1 className="pb-10 text-3xl font-medium">/About</h1>
                <p>
                    I am an undergraduate student studying at the Singapore University of Technology and Design (SUTD).
                    Having explored the different domains within the tech industry, I have decided to specialise in software engineering.<br/><br/>
                    With technological advancements, more can be done to help others.
                    My aim is to build software that provides a good user experience and can empower others.
                    To learn more about my work experience and studies, do visit my &nbsp; 
                    <a class="about-socials" href="https://www.linkedin.com/in/teo-wen-kai-3264a91aa/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>LinkedIn
                    </a> &nbsp; page!
                </p>
            </div>

            <div className="dark:bg-[#1b1b1b] dark:text-white py-15">
                <h2 className="text-xl font-medium">
                    Connect with me:
                    &nbsp;
                    <a class="about-socials" href="https://www.linkedin.com/in/teo-wen-kai-3264a91aa/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    &nbsp;
                    <a class="about-socials" href="https://github.com/YouEsBee/" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </h2>
            </div>
        </>
        
    );
};