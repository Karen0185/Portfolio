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
                <p>Я открыт для различных форм сотрудничества! Если хотите сотрудничать со мной, обращайтесь по номеру телефона, указанный ниже, или же,по электронной почте! Если появились вопросы, предложения, то заполните форму ниже. Благодарю за внимание!</p>
            </div>
            <div className="contact-bottom">
                <form action="">
                    <input type="text" placeholder='Как вас зовут?' />
                    <input type="text" placeholder='Ваш Е-Майл:' />
                    <textarea
                        value={text}
                        onChange={handleChange}
                        style={textareaStyle}
                        placeholder='Несколько слов о проекте'></textarea>
                    <button type="submit" className='send'>Отправить</button>
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