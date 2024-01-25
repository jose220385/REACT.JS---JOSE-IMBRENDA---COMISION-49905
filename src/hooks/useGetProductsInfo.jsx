import { useState, useEffect } from "react"
import {collection, getDocs, getFirestore} from "firebase/firestore"

/**
 * @description Hook que retorna los valores de productos
 * @returns {Array}
 */
export const useGetProductsInfo = (collectionName="products")=>{
    const [productsData, setProductsData] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        const productsCollection = collection (db, collectionName)
        getDocs(productsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
            )
        })
    },[collectionName])

    return {productsData}
}