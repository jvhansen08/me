export function Error() {
    return(
        <div style={{display: "flex", justifyContent: "center", padding: "5%"}}>
            <div className="outline-letters">
                <h1>Hmmm... Something's not right!</h1>
                <h3>That page doesn't exist; try going to the <a href='/home' style={{color: "White"}}>home page!</a></h3>
            </div>
        </div>
    )
}