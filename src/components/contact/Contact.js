import ContactCSS from './Contact.module.css';
import Form from './form/Form';

const Contact = () => {
    return ( 
            <div className={ContactCSS.contact}>
                <h1>Get in touch.</h1>
                <p>Social Networks.</p>
                <div className={ContactCSS.socialContainer}>
                    <a href="https://linkedin.com/in/andrew-peattie" title="GitHub Profile Link">
                        <span title="LinkedIn">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </span>
                    </a>
                    <a href="https://github.com/atrp87" title="GitHub Profile Link">
                        <span title="GitHub">
                            <i className="fab fa-github-square fa-2x"></i>
                        </span>
                    </a>
                </div>
                <p>
                    Contact me on any of my social networks / 
                    <a className="myEmail" 
                        href="mailto:drewpeattie@hotmail.com?subject=Hello Andrew" 
                        title="Andrew's Email"> drewpeattie@hotmail.com </a>
                        or via this form. 
                        <br></br>I look forward to hearing from you.
                </p>
                <Form />
            </div>
    );
}

export default Contact;