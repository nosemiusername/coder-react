import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import History from './pages/History'
import JoinUs from './pages/JoinUs'
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className='content'>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contactanos" element={<ContactUs />} />
            <Route path="/historia" element={<History />} />
            <Route path="/unete" element={<JoinUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/:order" element={<Checkout />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
