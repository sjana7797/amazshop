import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDHRDG4h4nxoTsOlmpTGQvJSdJdsR-gNlg",
  authDomain: "lustrous-jet-319905.firebaseapp.com",
  databaseURL: "https://lustrous-jet-319905-default-rtdb.firebaseio.com",
  projectId: "lustrous-jet-319905",
  storageBucket: "lustrous-jet-319905.appspot.com",
  messagingSenderId: "243376341690",
  appId: "1:243376341690:web:a166ff4a624431bbbdb883",
  measurementId: "G-6GVT1Z2DCK",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
