export function Home() {
    const seq = [
        "Hi,",
        "I'm Jared.",
        "I'm a software developer, set to graduate in December 2023."
    ]
    return(
        <div className="about-container" style={{textAlign: "initial"}}>
            <img src="src/assets/me-off-center2.jpg" alt="A close-up image of a young man wearing a blue Utah State shirt" style={{width: "100%"}} />
            <div className="about-body" style={{maxWidth: "50%", fontSize: "20px"}}>
                {seq.map((phrase, index) => (
                    <p style={{fontSize: '40px', fontWeight: 'bold', color: '#2c2f4c',}} key={index}>
                        {phrase}
                    </p>
                ))}
                <p style={{color: "#a6a6a9"}}>I love writing code. I have experience in full-stack web development and android app development, and I would love to further my skills both in those fields and in others.</p>
            </div>
        </div>
    )
}