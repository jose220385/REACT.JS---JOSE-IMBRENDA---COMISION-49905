import { useState, useEffect } from "react"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

export const useGetProductsByCategory = (category) => {
    const [productsByCategory ,setProductsByCategory] = useState([]);

    useEffect (() => {

        const db = getFirestore();
        const q = query(collection(db, "products"), where("category", "==", `${category}`));

        getDocs(q).then((snapshot) => {
            setProductsByCategory(snapshot.docs.map(doc=>({...doc.data()})))
        })
      }, [category]);

    return { productsByCategory }
};