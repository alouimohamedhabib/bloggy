import { useState } from 'react';
import { validateEmail, validateInput } from '../../shared/helpers/form-validators';
import EnrollBtn from '../styled/enroll-btn'
import ErrorMsg from '../styled/error-msg';
import InputStyled from '../styled/input';
import TextareaStyled from '../styled/textarea';

const Contact = () => {
    const [errors, setErrors] = useState({
        email: "",
        message: "",
    });
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        const theForm = document.getElementById("contactForm");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        let emailState = await validateEmail(email, setErrors);
        let messageState = await validateInput(message, setErrors);
        if (!emailState || !messageState) {
            setErrors({
                email: !emailState ? 1 : 0,
                message: !messageState ? 1 : 0,
            })
            return false
        } else {
            theForm.submit();
        }

        return false;

    }
    return <>
        {errors.email == 1 && <ErrorMsg>Please check the email</ErrorMsg>} --
        {errors.message == 1 && <ErrorMsg>Please check the message</ErrorMsg>} --
        {errors.message} --
        <form id="contactForm" onSubmit={(event) => {
            handleFormSubmission(event);
        }} >

            <h2>
                Let's get in touch 😏!
            </h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <InputStyled id="email" defaultValue="" className={errors.email.length > 0 ? 'has-error' : ''} type="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <TextareaStyled id="message" defaultValue="" className={errors.email.length > 0 ? 'has-error' : ''} cols="50" />
            </div>
            <EnrollBtn className="mt-2" type="submit">Submit</EnrollBtn>
        </form>
    </>
}
export default Contact;