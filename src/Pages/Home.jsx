import ItemListContainer from "../components/ItemListContainer"
import { useGetProductsInfo } from '../hooks/useGetProductsInfo';
import { useSetHeadInfo } from "../hooks/useSetHeadInfo";

export const Home = () =>{

    useSetHeadInfo('Papelera Royal Plast')

    const {productsData} = useGetProductsInfo()
  //desestructuramos el objeto obtenido del custom Hook useGetProductsInfo
    console.log(productsData)
    return(
        <div>
            <ItemListContainer productsData = {productsData}/>
        </div>
    )
}