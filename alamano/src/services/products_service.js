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
        name: 'Cerámica',
    },
    {
        id: 4,
        name: 'Lettering',
    },
    {
        id: 5,
        name: 'Muebles',
    },

];

const productItems = [
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
]

const productDetails = [
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
]


const findProductDetails = (id) => {
    return productDetails.find(product => product.id === id);
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
export { loadProduct, loadDetails, loadCategories };