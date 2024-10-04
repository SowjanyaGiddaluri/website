import './../Header/Header.css';

function Header() {
    return (
        <nav className="nav-header">
            <div className="nav-content">
                <p className="website-logo">RA</p>
                <ul className="nav-menu">
                    <li>
                        <img className="social-networking-img"
                            src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
                            alt="LinkedIn"/>
                    </li>
                    <li>
                        <img className="social-networking-img"
                            src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
                            alt="GitHub"/>
                    </li>
                    <li>
                        <img className="social-networking-img"
                            src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
                            alt="Twitter"/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

