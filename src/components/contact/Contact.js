import ContactCSS from './Contact.module.css'

const Contact = () => {
    return ( 
            <div className={ContactCSS.contact}>
                <h1>Get in touch.</h1>
                <p>Social Networks.</p>
                <div className="social-container">
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
                    Send me an email through this form to contact  
                    <a className="myEmail" href="mailto:drewpeattie@hotmail.com?subject=Hello Andrew" title="Andrew's Email"> drewpeattie@hotmail.com</a>
                </p>
                <form>
                    <label for='name'>name:</label>
                    <input
                        id='name'
                        type="text"
                        required
                    />
                    <label for='email'>email:</label>
                    <input
                        id="email"
                        type="email"
                        required
                    />
                    <label for='msg'>message:</label>
                    <textarea
                        id='msg'
                        required 
                    />
                    <button>Send</button>
                </form>
            </div>
    );
}

export default Contact;