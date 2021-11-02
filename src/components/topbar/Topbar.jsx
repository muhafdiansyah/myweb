import "./Topbar.scss"
import logo from './my-logo.png';

export default function topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"><img src={logo} alt="afd." class="logo"/></a> 
                    
                </div>

                <div className="right">
                    <a href="#skill" className="navbaritem">Skills</a>
                    <a href="#projects" className="navbaritem">Projects</a>
                    <a href="#contact" className="navbaritem">Contacts</a>
                </div>
            </div>
        </div>
    )
}
