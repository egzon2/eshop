import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyApLbYGUxqYjji288vqXl28-1ukQGkQ3pw',
  authDomain: 'eshop-8767a.firebaseapp.com',
  projectId: 'eshop-8767a',
  storageBucket: 'eshop-8767a.appspot.com',
  messagingSenderId: '899930816084',
  appId: '1:899930816084:web:bf444c47a7a9d302c377c1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
