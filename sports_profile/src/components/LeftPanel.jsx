import ken from "../assets/ken.jpg";


function LeftPanel() {
    return (
        <div className="left-panel">

            <img src={ken} alt="Ken Wachira" className="hero-image"/>

            <div className="overlay">

                <h1>
                    Ken
                    <br />
                    Wachira
                </h1>

                <h2>BASKETBALL COACH</h2>

                <div className="about">
                    <h3>About Ken</h3>

                    <p>
                        Meet Ken Wachira, a basketball strategist known for his quick
                        decision-making and game-reading abilities. His coaching style
                        emphasizes enhancing court vision and predicting opponents'
                        moves. Gain exclusive insights into basketball tactics and
                        improve your 3-point game.
                    </p>

                    <p className="quote">
                        "Read the game, own the court."
                    </p>
                </div>

            </div>

        </div>
    )
    
}

export default LeftPanel