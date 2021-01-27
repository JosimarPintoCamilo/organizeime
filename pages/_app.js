import '../styles/globals.css'
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";

function MyApp({ Component, pageProps }) {
  const apiKey = process.env.FIREBASE_API_KEY;
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const databaseURL = process.env.FIREBASE_DATABASE_URL;
  const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
  const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;

    const config = {
        apiKey: `${apiKey}`,
        projectId: `${projectId}`,
        databaseURL: `${databaseURL}`,
        authDomain: `${authDomain}`, 
        storageBucket: `${storageBucket}`,
        messagingSenderId: `${messagingSenderId}`
     };

  return <FirebaseAuthProvider firebase={firebase} {...config}>
            <Component {...pageProps} />
          </FirebaseAuthProvider>
  
}

export default MyApp
