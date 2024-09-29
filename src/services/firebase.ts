import { getAuth } from 'firebase/auth';

import { getApps, getApp, initializeApp } from 'firebase/app';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDxvR8qZ9LrMxagL90upskU8kxFB0N-jhA',
  authDomain: 'link-four.firebaseapp.com',
  projectId: 'link-four',
  storageBucket: 'link-four.appspot.com',
  messagingSenderId: '122420949976',
  appId: '1:122420949976:web:a3092db3771ffc8e7a78ad',
  measurementId: 'G-7W3RT0M6E2',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

// if (process.env.NODE_ENV === 'development') {
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099');
// }

export { app, auth, storage };
