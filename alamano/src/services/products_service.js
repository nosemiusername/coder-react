import { query, where, collection, getDocs, doc, getDoc, addDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

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
const createOrder = async (cart, contactInfo) => {
    const order = await addDoc(collection(db, 'orders'), {
        cart,
        contactInfo,
        status: 'pending'
    });
    return order.id;
}

const payOrder = async (orderId) => {
    console.log('payOrder', orderId);
    const orderRef = doc(db, 'orders', orderId);
    const order = await getDoc(orderRef);
    if (order.exists()) {
        console.log('order', orderRef);
        await setDoc(orderRef, {
            ...order.data(),
            status: 'paid'
        });
    }
    return order.exists();
}

export { createOrder, getItemsByCategory, getCategories, getItemById, payOrder };