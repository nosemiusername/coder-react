import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer id={1} />
      <Footer />
    </>
  );
}

export default App;
