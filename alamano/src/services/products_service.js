const productItems = [
    {
        id: 1,
        title: "Ventana gris",
        price: 100000,
        pictureUrl: "./images/IMG_6555.jpg",
        delivery: 3,
        category: "Ventanas",
    },
    {
        id: 2,
        title: "Ventana azul",
        author: "Loreto Oryan",
        price: 80000,
        pictureUrl: "./images/IMG_6556.jpg",
        delivery: 3,
        category: "Ventanas",
    },
    {
        id: 3,
        title: "Ventana & luces",
        author: "Loreto Oryan",
        price: 110000,
        delivery: 3,
        pictureUrl: "./images/IMG_6557.jpg",
        category: "Ventanas",
    },
]

const productDetails = [
    {
        id: 1,
        description: "Tres fotos de contruccion, con marco de ventana reciclada, tratada con 3 capas de pintura, donde prima la gris",
        size: "1.5x1.5",
        color: "Gris y café",
        material: "Madera",
        author: "Loreto Oryan",
        code: "LOR-001",
        stock: 1
    },
    {
        id: 2,
        description: "Fotos de contruccion, con marco de ventana reciclada, tratada con 2 capas de pintura, donde prima la azul",
        size: "1.5x1.5",
        color: "Azul",
        material: "Madera",
        author: "Loreto Oryan",
        code: "LOR-002",
        stock: 2
    },
    {
        id: 3,
        description: "Marco de ventana reciclada, con dos capas, y colgante con candelabros",
        size: "1.5x1.5",
        color: "Verde agua y café",
        material: "Madera",
        author: "Loreto Oryan",
        code: "LOR-003",
        stock: 5
    },
]


const findProductDetails = (id) => {
    return productDetails.find(product => product.id === id);
}

const loadProduct = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productItems);
        }, delay);
    });
}

const loadDetails = (delay, id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(findProductDetails(id));
        }, delay);
    });
}
export { loadProduct, loadDetails };