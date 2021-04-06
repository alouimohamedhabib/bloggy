import {  Link } from "react-router-dom";


const Header = () => {
    return <>
        <h1>header component</h1>
        <hr />
            <ul>
                <li>
                    <Link
                        to="/"
                    >Home</Link>

                </li>
                <li>
                    <Link
                        to="/about"
                    >About</Link>

                </li>
            </ul>


    </>
}


export default Header;