const BASE_URL = import.meta.env.BASE_URL;

const articles = [
    {
        name: 'teofangqi-pottery',
        title: 'Teo Fang Qi Pottery Portfolio Website',
        content: [
            'Tech Stack: React, Typescript, Tailwind CSS, Vite',
            'Custom-designed for a pottery artist, this project involved a collaborative UI design process to create an intuitive user experience. The goal was twofold: to provide a beautiful gallery that highlights her craft while creating seamless pathways for customers, fellow artists, and potential collaborators to connect with her.'
        ],
        link: {
            "Visit the website: teofangqi.com": "https://www.teofangqi.com/"
        },
        image: [
            BASE_URL + "/images/potterySite.png"
        ]
    },
    {
        name: 'spacebar-site',
        title: 'SUTD Space Bar Fifth Row Website',
        content: [
            'Tech Stack: React, Typescript, Tailwind CSS, Next JS',
            'As a developer and designer, I specialise in translating technical milestones into compelling narratives. By collaborating closely with the SUTD Space Bar team, I ensure their digital presence not only meets technical requirements but effectively communicates our success stories to new members, the school committee, and potential investors.'
        ],
        link: {
            "Visit the website: spacebar.sutd.edu.sg": "https://spacebar.sutd.edu.sg/"
        },
        image: [
            BASE_URL + "/images/spacebar.png"
        ]
    },
    {
        name: 'cycling-planner',
        title: 'Cycling Planner App',
        content: [
            'Tech Stack: React Native, Typescript',
            'We wanted to have a better cycling planner in Singapore by utilising the park connector and traffic light data from data.gov.sg. This has led to us creating cycling planner, an app that aims to help Singaporeans plan their cycling trips easily.'
        ],
        link: {
            "Visit the Github Repo: github.com/YouEsBee/CyclePlanner-React": "https://www.github.com/YouEsBee/CyclePlanner-React/"
        },
        image: [
            BASE_URL + "/images/cyclePlanner.svg"
        ]
    },
    {
        name: 'touch-grass',
        title: 'Touch Grass for Dum Dumber Hackathon 2026',
        content: [
            'Tech Stack: Javascript, Three JS',
            'Inspired by students not going out on a nature walk frequently, we created this web app for students to take a photo of plants to clock in. It aims to encourage them to go out to experience nature more often rather than just work all day.'
        ],
        link: {
            "Visit the Github repo: https://github.com/YouEsBee/touch-grass.": "https://github.com/YouEsBee/touch-grass."
        },
        image: [
            BASE_URL + "/images/touchGrass.png"
        ]
    },
    {
        name: 'sg-dialect',
        title: 'SG Dialect Website',
        content: [
            'Tech Stack: React, Javascript, Vite',
            'This is an initiative to help everyone learn Singaporean dialects easily anytime and anywhere. Since this is an open-source project, all contributions are welcome! Visit the Github repository for more information.'
        ],
        link: {
            "Visit the Github repo: https://github.com/YouEsBee/sgdialect-react": "https://github.com/YouEsBee/sgdialect-react"
        },
        image: [
            BASE_URL + "/images/sgdialect.png"
        ]
    },
    {
        name: 'epilepsy-guard',
        title: 'Epilepsy Guard App',
        content: [
            `Worried. Tired. Afraid. Emotions of what most people with epilepsy experience on a regular basis.`,
            `To ease their woes, many patients use technology for help to reach them on time. However, both the software and hardware are often either too expensive, or require a subscription. This results in low-income patients being neglected.`,
            `Epilepsy Guard is an open-source project which aims to help these patients track their condition. I hope that developers would also be able to contribute to this cause with me.`,
            `Do reach out if you would like to contribute to this project! Source files in Github and Figma mockups of the project in Behance are appended in the links below.`
        ],
        link: {
            "Github": "https://github.com/YouEsBee/Epilepsy-Guard",
            "Behance": "https://www.behance.net/gallery/162828299/Epilepsy-Guard-App-UI?tracking_source=search_projects|epilepsy+guard&l=1"
        },
        image: [
            BASE_URL + "/images/epilepsyGuard.png"
        ]
    },
    {
        name: 'emcolour-me',
        title: 'Emcolour Me for Chrome Developer Challenge 2024 ',
        content: [
            `My challenge in reading charts and maps with very close colours inspired me to create this chrome extension. When I had to complete Geography assignments through my computer, I often had to toggle between Settings and my browser tab, so that I could interpret the map and get back to answering those questions. Constantly switching between the modes is required, as not being completely colourblind, I still needed colour visual cues to proceed with my homework. I hope that this chrome extension can help many other people like me, not just with their homework, but also with browsing in general.`,
            `In addition, colour vision deficiency affects about 1 in 12 men and 1 in 200 women. This is a huge number, for which my program could have a huge impact and improving the lives of many.`,
            `Interested to find out more? Links to the Github source code and Dribbble showcase of how this works are appended below.`
        ],
        link: {
            "Github": "https://github.com/YouEsBee/Emcolour-Me",
            "Dribbble": "https://dribbble.com/shots/25377634-Emcolour-Me-A-Chrome-Extension"
        },
        image: [
            BASE_URL + "/images/emcolourMe.png"
        ]
    },
    {
        name: 'swipework',
        title: 'SwipeWork App Concept for Dubai App Olympics 2024',
        content: [
            `SwipeWork is a platform that guides youths in networking. With a step-by-step networking guide and predictive AI capabilities, it allows youths to venture into the cumbersome process of networking.`,
            `In this app prototype, we have incorporated features inspired from 4 platforms, namely LinkedIn's networking, Duo's streaks, ChatGPT's intelligence and Tinder's UI. These features work together to provide a conducive environment for youths to begin building their network, and even continue doing so.`,
            `Created for participation in Dubai App Olympics 2024. To learn more about our user interface, do visit the Dribbble link below!`,
            `Built with Wazir Mohamed and Joel Angelo Teh.`
        ],
        link: {
            "Dribbble": "https://dribbble.com/shots/25379030-SwipeWork-App-Concept"
        },
        image: [
            BASE_URL + "/images/SwipeWork.png"
        ]
    },
];

export default articles;