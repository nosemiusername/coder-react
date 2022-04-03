import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer--company">
                <small>alamano &copy;</small>
            </div>
            <div className="footer--blank"></div>
            <div className="footer--list">
                <ul className="list">
                    <li className="list--item"><Link to={"/historia"}>Historia</Link></li>
                    <li className="list--item"><Link to={"/unete"}>Sumate</Link></li>
                    <li className="list--item"><Link to={"/contactanos"}>Contactanos</Link></li>
                </ul>
            </div>
            <div className="footer--social">
                <a href="1.html"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="1.html"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </footer >
    )

}

export default Footer;