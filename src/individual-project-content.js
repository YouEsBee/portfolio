const BASE_URL = import.meta.env.BASE_URL;

const articles = [
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
        title: 'Emcolour Me - A Chrome Extension',
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
        title: 'SwipeWork App Concept',
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