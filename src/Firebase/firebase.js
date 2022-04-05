import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCphZoB3bN13IyLO51S6Q7fU9ROzHt76HY',
  authDomain: 'consumer-a016a.firebaseapp.com',
  databaseURL:
    'https://consumer-a016a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'consumer-a016a',
  storageBucket: 'consumer-a016a.appspot.com',
  messagingSenderId: '790514849346',
  appId: '1:790514849346:web:5e2d234f30c4b7b5427fdb',
  measurementId: 'G-C504V364HK',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
