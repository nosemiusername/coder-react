import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const greeting = {
    title: "Ventana Reciclada",
    description: "Fotos de contruccion, con marco de ventana reciblada, tratada con 3 capas de pintura",
    src: "./images/IMG_6555.jpg"
  }

  return (
    <>
      <Navbar />
      <ItemListContainer {...greeting} />
      <Footer />

    </>
  );
}

export default App;
