// src/Firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCfzOssMVNufe3qbGJTGz26oEDq6ODQxfI',
  authDomain: 'task-manager-1f690.firebaseapp.com',
  projectId: 'task-manager-1f690',
  storageBucket: 'task-manager-1f690.appspot.com',
  messagingSenderId: '106070155498',
  appId: '1:106070155498:web:8d23a2179d1f96b0997793',
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtém a instância do Firestore
const db = getFirestore(app);

// Exporta a instância do Firestore
export { db };
