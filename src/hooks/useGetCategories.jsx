import { useState, useEffect } from "react"
import { getProductsInfo } from "../services"
import {collection, getDocs, getFirestore} from "firebase/firestore"

/**
 * @description Hook que retorna las categorias de productos
 * @returns {Array}
 */
export const useGetCategories = (collectionName="category")=>{
    const [categories, setCategories] = useState([])

    
        /* getProductsInfo(url).then(res => {setCategories(res.data)}).catch(err => {console.log(err)}) */
        /* const db = getFirestore()
        const q = query(collection(db,"products"), where("category","==",category))

        getDocs(q).then((snapshot)=>{
            setCategories(snapshot.docs.map(doc=>({...doc.data()})))
        })
    },[category])

    return {categories} */
    
        useEffect (() => {
    
            const db = getFirestore();
            const categoryCollection= collection(db, collectionName);
    
            getDocs(categoryCollection).then((snapshot) => {
                setCategories(snapshot.docs.map(doc=>({...doc.data()})))
            })
          }, []);
    
        return { categories }
    };

