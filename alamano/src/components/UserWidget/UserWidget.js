import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';

function UserWidget() {
    const [user, loading, error] = useAuthState(auth);
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);
    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
    };
    const handleClose = () => {
        setAnchor(null);
    };
    const navigate = useNavigate();
    const longinHandler = async (e) => {
        navigate('/login');
    }
    const handleLogout = async (e) => {
        await auth.signOut();
        navigate('/');
    }
    const loggedMenu = () => {
        return (
            <>
                <i className="fa-regular fa-user" onClick={handleClick}></i>
                <Menu
                    anchorEl={anchor}
                    id="simple-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            bgcolor: '#353535',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#353535;',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/profile">Perfil</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/cart">Carrito</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/orders">Ordenes</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to=""><span onClick={handleLogout}>Cerrar Sesión</span></Link>
                    </MenuItem>
                </Menu>
            </>)
    }
    return (
        <>
            {user ? loggedMenu() : <i className="fa-regular fa-user" onClick={longinHandler}></i>}
        </>
    )
};

export default UserWidget;