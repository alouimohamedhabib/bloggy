import EnrollBtn from '../styled/enroll-btn'
import InputStyled from '../styled/input';
import TextareaStyled from '../styled/textarea';

const Contact = () => {
    return <>
        <form>
            <h2>
                Let's get in touch 😏!
            </h2>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <InputStyled type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <TextareaStyled type=""  id="exampleInputPassword1"  cols="50" />
            </div>
                <EnrollBtn className="mt-2" type="submit">Submit</EnrollBtn>
        </form>
    </>
}
export default Contact;