

function Content() {
    return (
        <main>
            <div className="row justify-content-center main-container">
                <div className="row bg-dark" id="profile-row">
                    <div className="col-md-12">
                        <h3>About me</h3>
                        <hr />
                    </div>
                    <div className="col-md-3">
                        <img src={require("./images/profile.png")} alt="profile" className="profile-img" />
                    </div>
                    <div className="col-md-9 intro">
        
                        <p className="prof-description">
                            I am a full stack web developer with a passion for creating beautiful, responsive websites and applications. I have a background in web development and have worked with many different languages and frameworks. I am currently looking for a position in the web development industry.
                        </p>
                        <hr />
                        <a href="#" className="btn btn-primary btn-lg">Contact me</a>
                        <a href="#" className="btn btn-success btn-lg portfolio-btn">My portfolio</a>
                    </div>
                </div>

                <div className="skills">
                    <h3>My Skills</h3>
                </div>

                <div className="education">
                    <h3>Academic Background</h3>
                </div>

                <div className="portfolio">
                    <h3>My Projects</h3>
                </div>

            </div>  
        </main>
    );
}

export default Content;