import ContactCSS from './Contact.module.css'

const Contact = () => {
    return ( 
            <div className={ContactCSS.contact}>
                <h1>Get in touch</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus porro ipsa commodi magni distinctio obcaecati perspiciatis voluptatem atque officia consequatur officiis, nihil cumque enim corrupti excepturi, in tempora veniam. Cupiditate!
                </p>
                <form>
                    <label>name:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>email:</label>
                    <input
                        type="email"
                        required
                    />
                    <label>message:</label>
                    <textarea 
                        required 
                    />
                    <button>submit</button>
                </form>
            </div>
    );
}

export default Contact;