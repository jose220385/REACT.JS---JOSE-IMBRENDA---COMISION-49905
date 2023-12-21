import axios from 'axios';

/**
 * @param {string}
 * @returns {Promise}
 * @description funcion que conecta a la API de productos y devuelve la info segun el endpoint que solicitemos
 */

export const getProductsInfo = async (url) =>{
    return await axios.get(url)

}