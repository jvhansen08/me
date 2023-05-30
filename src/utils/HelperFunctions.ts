import galaga from "../assets/galaga.png";
import babyYoda from "../assets/babyYodaSquare.png";
import terminal from "../assets/terminal.png";
import boardgame from "../assets/boardgamekeep.png"


export function Pages() {
    return (
        {
            "/me/home": "Home",
            "/me/projects": "Projects",
            "/me/about": "About",
            // comingSoon: "Coming Soon!"
        }
    )
}

export function ProjectList() {
    return [
        {
            imgSrc: galaga,
            imgAlt: "A screenshot of the arcade game galaga, showing the player's spaceship and enemy aliens",
            description: "A browser-based re-creation of the arcade game galaga. Written from scratch as a React project (collaboration)",
            technologies: "Typescript, HTML, React",
            sourceCodeLink: "https://github.com/WesleyEdwards/galaga",
            productLink: "https://wesleyedwards.github.io/galaga/",
            title: "Imitation Galaga",
        },
        {
            imgSrc: babyYoda,
            imgAlt: "A drawing of Baby Yoda, drawn on a phone screen, with color palette underneath",
            description: "An Android app that allows players to interact in real-time, playing a 'telephone'-like game where players alternate between drawing a prompt from the previous player and guessing what the previous player drew (collaboration)",
            technologies: "Android Studio, Jetpack Compose, Kotlin, Firebase Realtime Database",
            sourceCodeLink: "https://github.com/jvhansen08/DoodleDecipher",
            title: "Doodle Decipher",
        },
        {
            imgSrc: terminal,
            imgAlt: "A list of board games on a website designed to keep track of board games",
            description: "A Java program that spins up a simple shell; it makes system calls to implement a variety of commands that shadow linux commands and passes other commands to parent shell",
            technologies: "Java, Operating Systems, Gradle",
            sourceCodeLink: "https://github.com/jvhansen08/SimpleTerminal",
            title: "Simple Terminal",
        },
        {
            imgSrc: boardgame,
            imgAlt: "A list of board games on a website designed to keep track of board games",
            description: "A website that integrates with firebase and various APIs to enable board game owners to keep track of, rate, and choose board games, as well as locate board game stores near them (collaboration)",
            technologies: "Typescript, HTML, React, Firebase",
            sourceCodeLink: "https://github.com/jvhansen08/BoardGameKeep",
            productLink: "https://boardgamekeep.com",
            title: "Board Game Keep",
        }
        // {
        //     imgSrc: "src/assets/turnedAround.png",
        //     imgAlt: "A maze with a ball, two portals, and a goal, displayed on a phone screen",
        //     description: "An Android app that generates mazes and, accessing data from the gyroscope, allows the user to solve those mazes by tilting the phone",
        //     technologies: "Android Studio, Java, XML",
        // }
    ]
}