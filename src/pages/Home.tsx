export function Home() {
    const seq = [
        "Hi.",
        "I'm Jared",
        "It's nice to meet you!"
    ]
    return(
        <div style={{backgroundColor: 'navy'}}>
            {seq.map((phrase) => (
                <p style={{
                    fontSize: '30px',
                    color: 'white',
                }}>
                    {phrase}
                </p>
            ))}
        </div>
    )
}