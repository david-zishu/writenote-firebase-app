// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY_mXXLHqScj42OkdhXYRVPTRuE71KLbU",
  authDomain: "writenote-1fba8.firebaseapp.com",
  projectId: "writenote-1fba8",
  storageBucket: "writenote-1fba8.appspot.com",
  messagingSenderId: "917025146419",
  appId: "1:917025146419:web:d9bbbd02e396cba1210546",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// export const updateDocument = (id, updatedPost) => {
//   const postDoc = doc(db, "posts", id);
//   return updateDoc(postDoc, updatedPost);
// };

/*
updateBook = (id , updatedBook) => {
  const bookDoc = doc(db , "posts" , id);
  return updateDoc(bookDoc, updatedBook)
}
*/
