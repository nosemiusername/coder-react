import './NavBar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { loadCategories } from '../../services/products_service';
import { useState, useEffect } from 'react';

function Navbar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const categories = await loadCategories();
            setCategories(categories);
        }
        fetchData();
    }, []);

    return (
        <nav>
            <div className="logoWithIcons">
                <div className="empty"></div>
                <div className="logo">
                    <img src="/hd_transparent_logo.png" alt="logo" height="200px" />
                </div>
                <div className="icons">
                    <a href="/dec.html"><i className="fa-regular fa-user"></i></a>
                    <CartWidget />
                </div>
            </div>
            <ul className="menu">
                {categories.map(category =>
                    <li className="menuLi" key={category.id}>
                        <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;