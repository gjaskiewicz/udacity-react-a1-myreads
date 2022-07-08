import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";

class FirebaseAPI {
    init() {
        const firebaseConfig = {
            apiKey: "AIzaSyASjb7FN5fGn3BsYKA3ryfmd6i4LlOBFw8",
            authDomain: "myreads-udacity-5a1c0.firebaseapp.com",
            projectId: "myreads-udacity-5a1c0",
            storageBucket: "myreads-udacity-5a1c0.appspot.com",
            messagingSenderId: "86150761674",
            appId: "1:86150761674:web:6bab91d9689a10c76f3833"
        };

        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
    }

    async getBooks() {
        const booksCol = collection(this.db, "books");
        const booksSnapshot = await getDocs(booksCol);
        const booksList = booksSnapshot.docs.map(doc => { 
            return {
                id: doc.id,
                ...(doc.data())
            }
        });
        return booksList;
    }

    async saveBook(book) {
        const docRef = doc(this.db, "books/" + book.id);
        await updateDoc(docRef, book);
    }
}

export default FirebaseAPI;