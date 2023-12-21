import { useState, useEffect } from "react"
import { getProductsInfo } from "../services"
/**
 * @description Hook que retorna los valores de la API de productos
 * @returns {Array}
 */
export const useGetProductsInfo = (url)=>{
    const [productsData, setProductsData] = useState([])

    useEffect(()=>{
        getProductsInfo(url).then(res => {setProductsData(res.data)}).catch(err => {console.log(err)})
    },[])

    return {productsData}
}