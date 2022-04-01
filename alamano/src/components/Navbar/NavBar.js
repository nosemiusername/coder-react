import './NavBar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { loadCategories } from '../../services/products_service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            const categories = await loadCategories();
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
                    <a href="/dec.html"><i className="fa-regular fa-user"></i></a>
                    <CartWidget />
                </div>
            </div>
            <ul className="menu">
                {categories.map(category =>
                    <li className="menuLi" key={category.id}>
                        <NavLink to={`/category/${category.id}`}
                            activeClassName="menuLiActive"
                        >

                            {category.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;