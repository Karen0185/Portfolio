import { useState } from 'react';
import '../assets/styles/Contacts.scss'

const Contacts = ({contactsRef}) => {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const textareaStyle = {
        height: `${Math.max(40, text.split('\n').length * 8)}px`,
    };

    return (
        <div className="Contacts" id='contacts' ref={contactsRef}>
            <div className="contact-top">
                <h1>Контакты</h1>
                <p>Я открыт для различных форм сотрудничества, если вы хотите поработать вместе или просто задать вопрос, то заполните форму ниже</p>
            </div>
            <div className="contact-bottom">
                <form action="">
                    <input type="text" placeholder='What is your name?' />
                    <input type="text" placeholder='Your email:' />
                    <textarea
                        value={text}
                        onChange={handleChange}
                        style={textareaStyle}
                        placeholder='A few words about the project'></textarea>
                    <button type="submit" className='send'>Send</button>
                </form>
                <div className="contacts">
                    <div className="email">kharutyunyan6@gmail.com</div>
                    <div className="phone">+7(980)-089-44-44</div>
                </div>
            </div>
        </div>
    );

}
export default Contacts;