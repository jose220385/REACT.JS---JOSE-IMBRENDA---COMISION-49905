import ItemListContainer from "../components/ItemListContainer"
import { useGetProductsInfo } from '../hooks/useGetProductsInfo';
import { useSetHeadInfo } from "../hooks/useSetHeadInfo";

export const Home = () =>{

    useSetHeadInfo('Papelera Royal Plast')

    const url = new URL('https://6580ac733dfdd1b11c41efc7.mockapi.io/royalplast/products')
    //url.searchParams.append('id', '10101001')

    const {productsData} = useGetProductsInfo(url)
  //desestructuramos el objeto obtenido del custom Hook useGetProductsInfo
    console.log(productsData)
    return(
        <div>
            <ItemListContainer productsData = {productsData}/>
        </div>
    )
}