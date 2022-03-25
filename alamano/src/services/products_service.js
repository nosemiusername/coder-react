const products = [
    {
        id: 1,
        title: "Ventana gris",
        price: 100000,
        description: "Tres fotos de contruccion, con marco de ventana reciclada, tratada con 3 capas de pintura, donde prima la gris",
        pictureUrl: "./images/IMG_6555.jpg",
        stock: 1
    },
    {
        id: 2,
        title: "Ventana azul",
        price: 80000,
        description: "Fotos de contruccion, con marco de ventana reciclada, tratada con 2 capas de pintura, donde prima la azul",
        pictureUrl: "./images/IMG_6556.jpg",
        stock: 2
    },
    {
        id: 3,
        title: "Ventana & luces",
        price: 110000,
        description: "Marco de ventana reciclada, con dos capas, y colgante con candelabros",
        pictureUrl: "./images/IMG_6557.jpg",
        stock: 5
    },
]

const loadProduct = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, delay);
    });
}

export default loadProduct;