import { Link } from "react-router-dom"

const NotFound = () => {
    return <>
        <h1>
            Shoot, eh!
    </h1>
        <p>404</p>
        This page doesn't exist. If you think this is an error <Link to="/contact" >contact me</Link>
    </>
}

export default NotFound;