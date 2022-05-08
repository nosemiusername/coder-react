import { auth } from './firebase';
import { db } from './firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

/**
 * update user profile
 * @param {*} profile 
 */
const updateUserProfile = async (profile) => {
    const user = auth.currentUser;
    const { vemail, ...restOfVemail } = profile;
    const userRef = doc(db, 'profile', user.uid);
    await setDoc(userRef, restOfVemail);
}

/**
 * get user profile
 * @returns user profile
 */
const getUserProfile = async () => {
    const user = auth.currentUser;
    const userRef = doc(db, 'profile', user.uid);
    const userProfile = await getDoc(userRef);
    console.log(userProfile);
    return userProfile.data();
}

export { updateUserProfile, getUserProfile };
