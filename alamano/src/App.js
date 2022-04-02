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

function App() {

  return (
    <BrowserRouter>
      <div className='content'>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/historia" element={<History />} />
          <Route path="/unete" element={<JoinUs />} />
          {/* <Route path="/cart" element={<CartWidget />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
