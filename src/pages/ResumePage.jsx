import jobExp from "../job-exp.js";

export default function ResumePage() {

    return (
        <>
            <div className="dark:bg-[#1b1b1b] dark:text-white h-screen">
                <h1 className="text-3xl font-medium">/Resume</h1>

                    {jobExp && jobExp.map((job, index) => (
                        <div className="py-10 grid grid-cols-1 md:grid-cols-5">

                            <div className="md:col-span-1">
                                <h1 key={index} className="text-xl pb-3">{job.period}</h1>
                            </div>

                            <div className="md:col-span-4">
                                <h1 key={index} className="font-medium text-xl pb-3">{job.title}</h1>
                                <p key={index} className="pb-8">{job.company}</p>
                                <p key={index}>{job.shortDesc}</p>
                            </div>
                            
                        </div>
                    ))}
                
            </div>
        </>
    )
}