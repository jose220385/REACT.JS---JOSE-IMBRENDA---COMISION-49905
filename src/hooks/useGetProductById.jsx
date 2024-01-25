import { useState, useEffect } from "react"
import {collection,doc, getDoc, getFirestore} from "firebase/firestore"

export const useGetProductById = (id) => {
    const [productById ,setProductById] = useState([]);

    useEffect (() => {

        const db = getFirestore();
        const docRef = doc(db, "products",id)

        getDoc(docRef).then((doc) => {
            setProductById({id: doc.id,...doc.data()})
        })
      }, [id]);

    return { productById }
};