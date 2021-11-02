import "./Skill.scss"

export default function Skill() {
    return (


        <div className="skill" id="skill">
            <h1 className="heading h-skill">My Skills</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <i className="fas fa-code"></i>
                    </div>
                    <div className="bottom">
                        <h2>Programming</h2>
                        <p>Python, C, C#, HTML, CSS, ReactJS</p>
                    </div>
                </div>
            


                <div className="card">
                    <div className="top">
                        <i className="fas fa-video"></i>
                    </div>
                    <div className="bottom">
                        <h2>Video Editing</h2>
                        <p>After Effect, Sony Vegas</p>
                    </div>
                </div>



                <div className="card">
                    <div className="top">
                        <i className="fas fa-paint-brush"></i>
                    </div>
                    <div className="bottom">
                        <h2>Graphic Design</h2>
                        <p>Adobe Photoshop</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
