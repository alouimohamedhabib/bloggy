import {  NavLink } from "react-router-dom";

const MenuComponent = () => {
    return <>
        <nav className="menu-component">
            <ul className="nav justify-content-center ">
                <li className="nav-item" >
                    <NavLink to="/courses" activeClassName="current" exact>Courses</NavLink>

                </li>
                <li className="nav-item" >
                    <NavLink to="/about" activeClassName="current" exact >About</NavLink>

                </li>
                <li className="nav-item" >
                    <NavLink to="/posts" activeClassName="current"  exact>Posts</NavLink>

                </li>
                <li className="nav-item" >
                    <NavLink to="/contact" activeClassName="current" exact >contacts</NavLink>
                </li>
            </ul>
        </nav>
    </>
}
export default MenuComponent;