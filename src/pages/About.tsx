export function About() {
    return(
        <div style={{fontSize: '20px', color: 'white', paddingTop: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} className="outline-letters">
            <div style={{maxWidth: '50vw'}}>
            <h1>About Me </h1>
                <p>Thank you for visiting my website! I love anything that has to do with software (or rubber duckies). I have some experience in both front-end and back-end web development, android app development, and my coursework has covered operating systems, data structures and algorithms (I was actually a TA for that class for a while), cybersecurity, game development, and object oriented programming.</p>
                <p>As I wrap up my coursework this fall, I am interested in working part-time during the semester, and I will be available for full-time work following December 15, 2023.</p>
                <p>In my free time, you can find me reading/listening to a book, playing pickleball, spending time with my family, playing board games, or writing code.</p>
                <p>Feel free to take a look at my Github and Linkedin accounts, and to send me an email with any questions/comments. Thanks again for taking a look!</p>
                <span style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <div style={{paddingLeft: '1%', paddingRight: '1%'}}>
                        <a href="https://github.com/jvhansen08" target="page"><button>Github</button></a>
                    </div>
                    <div style={{paddingLeft: '1%', paddingRight: '1%'}}>
                        <a href="https://www.linkedin.com/in/jared-v-hansen/" target="page"><button>Linkedin</button></a>
                    </div>
                </span>
                <a href="mailto:jaredvhansen@gmail.com" target="page" style={{color: 'white'}}><p>jaredvhansen@gmail.com</p></a>
                <img src="../src/assets/profileCircle.png" alt="" width='150px' style={{padding: '2%'}} />
            </div>

        </div>
    )
}