import React, {useState} from 'react';
import { blueGrey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { send } from 'emailjs-com';

const Contact = () => {

    const [agree, setAgree] = useState(true)

    const [toSend, setToSend] = useState({
        name: '',
        message: '',
        mail: '',
    });

    const checkboxHandler = (e) => {
        const checked = e.target.checked;
        checked ? setAgree(true) : setAgree(false);
    }

    const submitFunc = () => {
       // e.preventDefault();
        console.log(toSend.name, toSend.mail, toSend.message, agree);
        agree ? console.log("You've accepted the Terms and Conditions") : alert("Please indicate that you accept the Terms and Conditions")
    }

    const onSubmit = () => {
        // e.preventDefault();
        send(
            'service_hwiaawv',
            'template_ca0ndk1',
            toSend,
            'user_xw96xVCw6vFAIl8JN6nCH'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message send :)')
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert(`Error ${err} :(`)
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <section className="contact__container" style={{"height": "calc(100vh - 167px)"}}>
            <div className="container">
                <h1 className="contact__title">Ask your question</h1>

                <form className="contact-form row" onSubmit={e => onSubmit(e)}>
                    <div className="form-field col x-50">
                        <input name="name"
                               id="name"
                               className="input-text js-input"
                               type="text"
                               value={toSend.name} onChange={handleChange}
                               required/>
                        <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field col x-50">
                        <input name="mail" id="email" className="input-text js-input" type="email"
                               value={toSend.mail} onChange={handleChange} required/>
                        <label className="label" htmlFor="mail">E-mail</label>
                    </div>
                    <div className="form-field col x-100">
                        <input name="message" id="message" className="input-text js-input" type="text"
                               value={toSend.message} onChange={handleChange} required/>
                        <label className="label" htmlFor="message">Message</label>
                    </div>
                    <div className="form-field col x-100 checkbox__field">
                        <div>
                            <Checkbox required defaultChecked sx={{color: blueGrey[800],'&.Mui-checked': {color: blueGrey[600],},}}
                                      value={agree} onClick={e => checkboxHandler(e)}/>
                            <span>I agree to the the Terms and Conditions</span>
                        </div>
                        <input className="submit-btn" type="submit" value="Submit"
                        onClick={submitFunc}
                        />
                    </div>

                </form>

            </div>
        </section>
    );
};

export default Contact;