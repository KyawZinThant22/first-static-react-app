import { faFacebook, faFacebookSquare, faGithubSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer(){
    return(
        <div className="footer">
            <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>

        </div>
    )
        

    
    
}

export default Footer