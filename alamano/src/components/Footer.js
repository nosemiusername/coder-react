import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer--company">
                <small>alamano &copy;</small>
            </div>
            <div className="footer--blank"></div>
            <div className="footer--list">
                <ul className="list">
                    <li className="list--item"><a href="1.html">Historia</a></li>
                    <li className="list--item"><a href="1.html">Sumate</a></li>
                    <li className="list--item"><a href="1.html">Contactanos</a></li>
                </ul>
            </div>
            <div className="footer--social">
                <a href="1.html"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="1.html"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </footer >
    )

}

export default Footer;