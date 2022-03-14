import './NavBar.css';
function Navbar() {
    return (
        <nav>
            <div className="logoWithIcons">
                <div className="empty"></div>
                <div className="logo">
                    <img src="./hd_transparent_logo.png" alt="logo" height="200px" />
                </div>
                <div className="icons">
                    <a href="./dec.html"><i class="fa-regular fa-user"></i></a>
                    <a href="./dec.html"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
            <ul className="menu">
                <li className="menuLi"><a className="active-nav" href="./dec.html">Decoración Reciclada</a></li>
                <li className="menuLi"><a href="./dec.html">Telares</a></li>
                <li className="menuLi"><a href="./dec.html">Muebles</a></li>
                <li className="menuLi"><a href="./dec.html">Lettering</a></li>
                <li className="menuLi"><a href="./dec.html">Cerámica</a></li>
            </ul>
        </nav >
    )
}

export default Navbar;