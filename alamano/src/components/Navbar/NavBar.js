import './NavBar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { getCategories } from '../../services/products_service';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const longinHandler = async (e) => {
        navigate('/login');
    }

    useEffect(() => {
        (async () => {
            const categories = await getCategories();
            setCategories(categories);
        })();
    }, []);

    return (
        <nav>
            <div className="logoWithIcons">
                <div className="empty"></div>
                <div className="logo">
                    <Link to={"/"}>
                        <img src="/hd_transparent_logo.png" alt="logo" height="200px" />
                    </Link>
                </div>
                <div className="icons">
                    <Link to={"/"} onClick={longinHandler} ><i className="fa-regular fa-user"></i></Link>
                    <CartWidget />
                </div>
            </div>
            <ul className="menu">
                {categories.map(category =>
                    <li className="menuLi" key={category.id}>
                        <NavLink to={`/category/${category.name}`}
                            activeClassName="active"
                        >

                            {category.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav >
    );
}

export default Navbar;