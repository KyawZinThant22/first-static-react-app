import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCoffee, faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Info(){
    return (
        <div className="info">
            <h2 className="name">Laura Smith</h2>
            <p className="p">Frontend Developer</p>
            <p className="website">laurasmith.website</p>

            <div className="button-container">
                <button className="button">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span>Email</span>
                </button>
                <button className="button one">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> <span>Linkedin</span>
                </button>
            </div>

        </div>
    )
}


export default Info