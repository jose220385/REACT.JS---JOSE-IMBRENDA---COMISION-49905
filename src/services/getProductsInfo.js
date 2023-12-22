import axios from 'axios';

/**
 * @param {string}
 * @returns {Promise}
 * @description funcion que conecta a la API de productos y devuelve la info segun el endpoint que solicitemos
 */

export const getProductsInfo = async (url) =>{
    return await axios.get(url)

}

export const getProductsByCategory = async (category) =>{
    const url = new URL ('https://6580ac733dfdd1b11c41efc7.mockapi.io/royalplast/products')
    url.searchParams.append("category", category);

    return await axios.get(url)

}
