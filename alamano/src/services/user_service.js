import { auth } from './firebase';
import { db } from './firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';

const updateUserProfile = async (profile) => {
    const user = auth.currentUser;
    const { vemail, ...restOfVemail } = profile;
    const userRef = doc(db, 'profile', user.uid);
    await setDoc(userRef, restOfVemail);
}

const getUserProfile = async () => {
    const user = auth.currentUser;
    const userRef = doc(db, 'profile', user.uid);
    const userProfile = await getDoc(userRef);
    console.log(userProfile);
    return userProfile.data();
}

export { updateUserProfile, getUserProfile };
