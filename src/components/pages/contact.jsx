import { useState } from 'react';
import { validateEmail, validateInput } from '../../shared/helpers/form-validators';
import EnrollBtn from '../styled/enroll-btn'
import InputStyled from '../styled/input';
import TextareaStyled from '../styled/textarea';

const Contact = () => {
    const [errors, setErrors] = useState({
        email: '',
        message: '',
    });
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        const theForm = document.getElementById("contactForm");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        let emailState = await validateEmail(email);
        let messageState = await validateInput(message);
        if (!emailState || !messageState) {
            return false
        } else {
            theForm.submit();
        }

        return false;

    }
    return <>
        <form id="contactForm" onSubmit={(event) => {
            handleFormSubmission(event);
        }} >

            {errors.email}
            <h2>
                Let's get in touch 😏!
            </h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <InputStyled id="email" defaultValue="mail@mail" className={errors.email.length > 0 ? 'has-error' : ''} type="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <TextareaStyled id="message" defaultValue="zefbzef" className={errors.email.length > 0 ? 'has-error' : ''} cols="50" />
            </div>
            <EnrollBtn className="mt-2" type="submit">Submit</EnrollBtn>
        </form>
    </>
}
export default Contact;