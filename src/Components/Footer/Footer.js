import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './../Footer/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="row mt-5 py-5">
                    <div className="col-sm-12 col-md-4 text-start my-3">
                        <h4>Get In Touch</h4>
                        <div className='icon-list'>
                            <FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;&nbsp; Mail
                            <br/>
                            <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;&nbsp; Phone: (+20) 125-458-7564
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center my-3">
                        <button className="btn btn-outline-info">Contact Me</button>
                    </div>
                    <div className="col-sm-12 col-md-4 text-end my-3">
                        <div>
                            <FontAwesomeIcon icon={faFacebook} className='mx-3'/>
                            <FontAwesomeIcon icon={faLinkedin} className='mx-3'/>
                            <FontAwesomeIcon icon={faTwitter} className='mx-3'/>
                        </div>
                        <br></br>
                        <p className='text-end'>Copyright &copy; 2023 ITI Mansoura</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer