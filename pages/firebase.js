import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider,FirebaseAuthConsumer } from "@react-firebase/auth";

//   import {
//     FirebaseAuthProvider,
//     // FirebaseAuthConsumer,
//     // IfFirebaseAuthed,
//     // IfFirebaseAuthedAnd
//   } from "@react-firebase/auth";

export default function FirebaseTeste(){

    return (
        <div>
          
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
        </div>
    );
}