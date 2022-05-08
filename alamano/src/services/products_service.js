import { query, where, collection, getDocs, doc, getDoc, addDoc, setDoc, documentId } from 'firebase/firestore';
import { db } from './firebase';
import { auth } from './firebase';

/**
 * If category is undefined get first category
 * @param {*} category 
 * @returns list of items given category name
 */
const getItemsByCategory = async (category) => {
    const newCategory = category || await getFirstCategory();
    const itemsRef = collection(db, 'items');
    const q = query(itemsRef, where("category", '==', newCategory));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.length ? querySnapshot.docs.map(doc => doc.data()) : [];
}

/**
 * 
 * @returns first category name
 */
const getFirstCategory = async () => {
    const categoriesRef = doc(db, 'categories', '1');
    const categorySnap = await getDoc(categoriesRef);
    return categorySnap.exists() ? categorySnap.data().name : null;
}

/**
 * 
 * @param {*} id 
 * @returns complete item given his id 
 */
const getItemById = async (id) => {
    const itemRef = doc(db, 'items', id.toString());
    const item = await getDoc(itemRef);
    return item.exists() ? item.data() : null;
}

/**
 * return all categories availables
 */
const getCategories = async () => {
    const categoriesRef = collection(db, 'categories');
    const categories = await getDocs(categoriesRef);
    return categories.docs.length ? categories.docs.map(doc => doc.data()) : [];
}

/**
 * 
 * @param {*} order 
 * @returns order generated 
 */
const createOrder = async (cart, contactInfo, total) => {
    const user = auth.currentUser;
    const order = await addDoc(collection(db, 'orders'), {
        cart,
        contactInfo,
        status: 'pending',
        orderDate: new Date().toLocaleString(),
        uid: user ? user.uid : 'anonymous',
        total,
    });
    return order.id;
}

/**
 * 
 * @returns all orders
 */
const getOrders = async () => {
    const user = auth.currentUser;
    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef, where("uid", '==', user.uid));
    const orders = await getDocs(q);
    const response = orders.docs.length ? orders.docs.map((doc) => { return { id: doc.id, ...doc.data() } }) : [];
    // console.log(response);
    return response;
}

/**
 * 
 * @param {*} orderId 
 * @returns order created
 */
const payOrder = async (orderId) => {
    const orderRef = doc(db, 'orders', orderId);
    const order = await getDoc(orderRef);
    if (order.exists()) {
        await setDoc(orderRef, {
            ...order.data(),
            paymentDate: new Date().toLocaleString(),
            status: 'paid',
        });
    }
    return order.exists();
}

export { createOrder, getItemsByCategory, getCategories, getItemById, payOrder, getOrders };