import Logo from "../assets/react.svg";

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container">
                <a className="navbar-brand bg-dark text-light" href="/">
                    <img src={Logo} alt="Logo" width="38" height="34" />
                    Redux App
                </a>
            </div>
        </nav>
    );
};
export default Navbar;