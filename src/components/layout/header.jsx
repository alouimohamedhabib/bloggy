import {Link} from "react-router-dom";
import MenuComponent from "./menu";
import {Helmet} from "react-helmet";


const Header = () => {
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex justify-content-center mt-2">
                    <Link to="/">
                        <img className="m-auto d-block rounded-circle"
                             src="https://yt3.ggpht.com/ytc/AAUvwnihezaBZnf8sjCGCuOpsW5b4KwLZhJ6BqzGCUC5wEs=s88-c-k-c0x00ffffff-no-rj"
                             width="80" alt="Mohamed Habib ALOUI"/>
                    </Link>
                </div>
                <MenuComponent/>
            </div>
        </div>
    </>
}


export default Header;