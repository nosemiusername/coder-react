import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <ItemListContainer /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/*" element={<NotFound />} />
          {/* <Route path="/cart" element={<CartWidget />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
