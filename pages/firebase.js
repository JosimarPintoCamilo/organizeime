import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider,FirebaseAuthConsumer } from "@react-firebase/auth";

//   import {
//     FirebaseAuthProvider,
//     // FirebaseAuthConsumer,
//     // IfFirebaseAuthed,
//     // IfFirebaseAuthedAnd
//   } from "@react-firebase/auth";

function FirebaseTeste(props){
    const config = props.config;

    return (
  
        <FirebaseAuthProvider firebase={firebase} {...config}>
            <button
                onClick={() => {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(googleAuthProvider);
                }}
            >
                Sign In with Google
            </button>
            <button
                onClick={() => {
                    firebase.auth().signOut();
                }}
            >
                Sign Out
            </button>
            <div>
                <FirebaseAuthConsumer>
                    {({ isSignedIn, user, providerId }) => {
                        return (
                        <pre style={{ height: 300, overflow: "auto" }}>
                            {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                        </pre>
                        );
                    }}
                </FirebaseAuthConsumer>
            </div> 
            </FirebaseAuthProvider>   

       
    );
}
export async function getStaticProps()
{
    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN, 
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
     };
    console.log('[FIREBASE] Passando pelo getStaticProps();');

    return {
        props: {
            config
        }
    }
}

export default FirebaseTeste;