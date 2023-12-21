import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";


export const SubCategory = () => {
    const {id} = useParams()
    console.log(id)
    const url = new URL(
        "https://6580ac733dfdd1b11c41efc7.mockapi.io/royalplast/products"
      );
      url.searchParams.append("id", id.substring(1, 30));
      const { productsData } = useGetProductsInfo(url);

  return <ItemListContainer productsData = {productsData}/>
};
