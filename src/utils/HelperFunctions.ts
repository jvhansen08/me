
export function Pages() {
    return (
        {
            home: "Home",
            projects: "Projects",
            about: "About",
        }
    )
}

export function ProjectList() {
    return [
        {
            imgSrc: "src/assets/babyYodaSquare.png",
            imgAlt: "A drawing of Baby Yoda, drawn on a phone screen, with color palette underneath",
            description: "An Android app that allows players to interact in real-time, playing a 'telephone'-like game where players alternate between drawing a prompt from the previous player and guessing what the previous player drew",
            technologies: "Android Studio, Jetpack Compose, Kotlin, Firebase Realtime Database",
            sourceCodeLink: "https://github.com/jvhansen08/DoodleDecipher",
            title: "Doodle Decipher",
        },
        {
            imgSrc: "src/assets/galaga.png",
            imgAlt: "A screenshot of the arcade game galaga, showing the player's spaceship and enemy aliens",
            description: "A browser-based re-creation of the arcade game galaga. Written from scratch as a React project",
            technologies: "Typescript, HTML, React",
            sourceCodeLink: "https://github.com/WesleyEdwards/galaga",
            productLink: "https://wesleyedwards.github.io/galaga/",
            title: "Doodle Decipher",
        },
        // {
        //     imgSrc: "src/assets/turnedAround.png",
        //     imgAlt: "A maze with a ball, two portals, and a goal, displayed on a phone screen",
        //     description: "An Android app that generates mazes and, accessing data from the gyroscope, allows the user to solve those mazes by tilting the phone",
        //     technologies: "Android Studio, Java, XML",
        // }
    ]
}