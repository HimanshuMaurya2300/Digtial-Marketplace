import { NavLink } from "react-router-dom";
// import "./NavBar.css";
// import { IoMdHome } from "react-icons/io";
import { useState } from "react";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { useAuth0 } from "@auth0/auth0-react";


function NavBar() {

    const { loginWithRedirect } = useAuth0()
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="flex justify-between items-center shadow-lg py-4 px-4 bg-slate-300 mb-10">
                <div className="">
                    <NavLink exact to="/" className="">
                        <span className>CodeBucks</span>
                    </NavLink>
                </div>

                <div>
                    <ul className="flex gap-10">
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                {/* <IoMdHome /> */}
                                Home
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                exact
                                to="/blog"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                exact
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                {!isAuthenticated && <button onClick={() => loginWithRedirect()}
                                >
                                    Log In
                                </button>}

                                {isAuthenticated &&
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                }
                            </NavLink>
                        </li>
                        {isAuthenticated && <li>
                            <img src={user.picture} alt={user.name} className="rounded-full w-8" />
                        </li>}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;