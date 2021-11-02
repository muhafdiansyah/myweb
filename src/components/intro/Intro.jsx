import "./Intro.scss"
import "../../global.scss"
import profilepic from './my-photo.jpg';

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="container">
                <h1 className="heading h-welcome">Welcome to My Site!</h1>
                    <img src={profilepic} alt="" className="my-photo"/>
                <p><span className="introname">Hello I'm <strong>Muhammad Afdiansyah</strong>!</span></p>
                <p className="body-text">I'm an undergraduate Information and Technology student at Gadjah Mada University.
                    I'm passionate on technology and creative industries. Currently learning front-end Web Development. i also work as a Video Editor and Motion Designer freelancer. </p>

                <div className="shortcut-link" >

                    <a href="#skill" className="body-text" style={{fontFamily: "montserrat"}}><i class="fas fa-angle-down">  Skills</i></a>
                    <a href="#projects" className="body-text"><i class="fas fa-angle-down">  Projects</i></a>
                    <a href="#contact" className="body-text"><i class="fas fa-angle-down">  Contacts</i></a>

                </div>
            </div>
        </div>
    )
}
