import "./Contact.scss"

export default function contact() {
    return (
        <div className="contact" id="contact">
            <h1 className="heading h-contact">Contact Me</h1>

                <div className="container">
                    <div className="social-top" >
                        <ul>
                            <li><a href="https://www.facebook.com/afdiansyah.15" className="social-icon" style={{color: "#363636"}}><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://www.instagram.com/m.afdiansyah/" className="social-icon" style={{color: "#363636"}}><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/muhammad-afdiansyah-841798196/" className="social-icon" style={{color: "#363636"}}><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/muhafdiansyah" className="social-icon" style={{color: "#363636"}}><i className="fab fa-github"></i></a></li>
                        </ul>
                    </div>

                    <div className="social-bottom">
                        <ul>
                            <li><i className="fas fa-envelope"><span> muh.afdiansyah@gmail.com</span></i></li>
                            <li><i className="fas fa-phone"><span> +6281277701712</span></i></li>
                        </ul>
                    </div>
                </div>


        </div>
    )
}
