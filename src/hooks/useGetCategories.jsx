import { useState, useEffect } from "react"
import { getProductsInfo } from "../services"


/**
 * @description Hook que retorna las categorias de productos
 * @returns {Array}
 */
export const useGetCategories = (url)=>{
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getProductsInfo(url).then(res => {setCategories(res.data)}).catch(err => {console.log(err)})
    },[])

    return {categories}
}