import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
const categories = [
    {
        id: 1,
        name: 'Decoración Reciclada'
    },
    {
        id: 2,
        name: 'Bordados',
    },
    {
        id: 3,
        name: 'Muebles',
    },
    {
        id: 4,
        name: 'Cerámica',
    },

];

const productItems = [
    {
        id: 13,
        title: "Ventana roja",
        price: 100000,
        pictureUrl: "/images/IMG_6554.jpg",
        category: 1,
    },
    {
        id: 1,
        title: "Ventana gris",
        price: 100000,
        pictureUrl: "/images/IMG_6555.jpg",
        category: 1,
    },
    {
        id: 2,
        title: "Ventana azul",
        price: 80000,
        pictureUrl: "/images/IMG_6556.jpg",
        category: 1,
    },
    {
        id: 3,
        title: "Ventana & luces",
        price: 110000,
        pictureUrl: "/images/IMG_6557.jpg",
        category: 1,
    },
    {
        id: 4,
        title: "Camino de mesa antiplano",
        price: 35000,
        pictureUrl: "/images/IMG_6558.jpg",
        category: 2,
    },
    {
        id: 5,
        title: "Cojines gancho",
        price: 15000,
        pictureUrl: "/images/IMG_6559.jpg",
        category: 2,
    },
    {
        id: 6,
        title: "Mesa terraza plegable",
        price: 45000,
        pictureUrl: "/images/IMG_6560.jpg",
        category: 3,
    },
    {
        id: 7,
        title: "Perchero romboide",
        price: 49000,
        pictureUrl: "/images/IMG_6561.jpg",
        category: 3,
    },
    {
        id: 8,
        title: "Colgador movil niño",
        price: 35000,
        pictureUrl: "/images/IMG_6563.jpg",
        category: 3,
    },
    {
        id: 9,
        title: "Toros",
        price: 75000,
        pictureUrl: "/images/IMG_6564.jpg",
        category: 4,
    },
    {
        id: 10,
        title: "Juego de tazas delgado",
        price: 50000,
        pictureUrl: "/images/IMG_6565.jpg",
        category: 4,
    },
    {
        id: 11,
        title: "Bolas y plato",
        price: 55000,
        pictureUrl: "/images/IMG_6566.jpg",
        category: 4,
    },
    {
        id: 12,
        title: "Lampara de mesa",
        price: 85000,
        pictureUrl: "/images/IMG_6567.jpg",
        category: 4,
    },
]

const productDetails = [
    {

        id: 13,
        title: "Ventana roja",
        price: 100000,
        pictureUrl: "/images/IMG_6554.jpg",
        size: "1.5x1.5",
        color: "Roja y café",
        material: "Madera",
        author: "Loreto Oryan",
        code: "LOR-000",
        stock: 1,
        deliveryTime: 3,
    },
    {
        id: 1,
        title: "Ventana gris",
        description: "Tres fotos de contruccion, con marco de ventana reciclada, tratada con 3 capas de pintura, donde prima la gris",
        price: 100000,
        pictureUrl: "/images/IMG_6555.jpg",
        size: "1.5x1.5",
        color: "Gris y café",
        material: "Madera",
        author: "Loreto Oryan",
        code: "LOR-001",
        stock: 1,
        deliveryTime: 3,
    },
    {
        id: 2,
        description: "Fotos de contruccion, con marco de ventana reciclada, tratada con 2 capas de pintura, donde prima la azul",
        title: "Ventana azul",
        price: 80000,
        pictureUrl: "/images/IMG_6556.jpg",
        size: "1.5x1.5",
        color: "Azul",
        material: "Madera",
        author: "Loreto Oryan",
        code: "LOR-002",
        stock: 2,
        deliveryTime: 2,
    },
    {
        id: 3,
        title: "Ventana & luces",
        price: 110000,
        pictureUrl: "/images/IMG_6557.jpg",
        description: "Marco de ventana reciclada, con dos capas, y colgante con candelabros",
        size: "1.5x1.5",
        color: "Verde agua y café",
        material: "Madera",
        author: "Loreto Oryan",
        code: "LOR-003",
        stock: 5,
        deliveryTime: 4,
    },
    {
        id: 4,
        title: "Camino de mesa antiplano",
        price: 35000,
        pictureUrl: "/images/IMG_6558.jpg",
        description: "Camino de mesa basado en diseño antiplanico de 12 secciones",
        size: "0.9x0.2",
        color: "Rojo, amarillo, verde",
        material: "Lana",
        author: "Ximena Oryan",
        code: "MOR-001",
        stock: 2,
        deliveryTime: 3,
    },
    {
        id: 5,
        title: "Cojines gancho",
        price: 15000,
        pictureUrl: "/images/IMG_6559.jpg",
        description: "Dos cojines diseño gancho doble",
        size: "0.4x0.4",
        color: "Blanco, verde, rojo y cafe",
        material: "Hilo",
        author: "Ximena Oryan",
        code: "MOR-002",
        stock: 3,
        deliveryTime: 3,
    },
    {
        id: 6,
        title: "Mesa terraza plegable",
        price: 45000,
        pictureUrl: "/images/IMG_6560.jpg",
        description: "Mesa para acomodar en baranda de terraza",
        size: "0.5x0.5",
        color: "Marron",
        material: "Raulí",
        author: "Jesus Mascayano",
        code: "JES-001",
        stock: 1,
        deliveryTime: 2,
    },
    {
        id: 7,
        title: "Perchero romboide",
        price: 49000,
        pictureUrl: "/images/IMG_6561.jpg",
        description: "Perchero de madera con 4 romboide",
        size: "1x0.2",
        color: "Café",
        material: "Rauli",
        author: "Jesus Mascayano",
        code: "JES-002",
        stock: 2,
        deliveryTime: 4,
    },
    {
        id: 8,
        title: "Colgador movil niño",
        price: 35000,
        pictureUrl: "/images/IMG_6563.jpg",
        description: "Colgador con ruedas para ropa de niños",
        size: "1x06",
        color: "Celeste",
        material: "Pino",
        author: "Jesus Mascayano",
        code: "JES-003",
        stock: 1,
        deliveryTime: 2,
    },
    {
        id: 9,
        title: "Toros",
        price: 75000,
        pictureUrl: "/images/IMG_6564.jpg",
        description: "Dos toros decoración",
        size: "0.4",
        color: "Rojo, negro",
        material: "Cerámica",
        author: "Ximena Oryan",
        code: "MOR-003",
        stock: 2,
        deliveryTime: 2,
    },
    {
        id: 10,
        title: "Juego de tazas delgado",
        price: 50000,
        pictureUrl: "/images/IMG_6565.jpg",
        description: "Juego de cuatro tazas de café veraniego",
        size: "15",
        color: "Rojo, cafe, verde, blanco",
        material: "Cerámica",
        author: "Ximena Oryan",
        code: "MOR-004",
        stock: 2,
        deliveryTime: 4,
    },
    {
        id: 11,
        title: "Bolas y plato",
        price: 55000,
        pictureUrl: "/images/IMG_6566.jpg",
        description: "Bolas y plato de decoración",
        size: "30x30",
        color: "Roja y Celeste",
        material: "Cerámica",
        author: "Ximena Oryan",
        code: "MOR-005",
        stock: 3,
        deliveryTime: 5,
    },
    {
        id: 12,
        title: "Lampara de mesa",
        price: 85000,
        pictureUrl: "/images/IMG_6567.jpg",
        description: "Lampara de mesa de decoración. No incluye pantalla",
        size: "80",
        color: "Roja",
        material: "Cerámica",
        author: "Ximena Oryan",
        code: "MOR-006",
        stock: 1,
        deliveryTime: 3,
    },

]


const findProductDetails = (id) => {
    const details = productDetails.find(product => product.id === id);
    return details ? details : { id: 0, title: "", price: 0, pictureUrl: "", description: "", size: "", color: "", material: "", author: "", code: "", stock: 0, deliveryTime: 0 };
}

const findProducts = (category) => {
    return productItems.filter(product => product.category === category);
}

const loadCategories = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories);
        }, delay);
    });
}

const loadProduct = (delay, category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(findProducts(parseInt(category)));
        }, delay);
    });
}

const loadDetails = (delay, product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(findProductDetails(parseInt(product.id)));
        }, delay);
    });
}

const getProducts = async () => {
    const itemCollection = collection(db, 'productos');
    const productosSnapshot = await getDocs(itemCollection);
    const productos = productosSnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });
    return productos;
}




export { loadProduct, loadDetails, loadCategories, getProducts };