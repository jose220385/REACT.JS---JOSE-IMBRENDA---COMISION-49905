import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProductsInfo } from "../hooks/useGetProductsInfo";
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";




export const SubCategory = () => {
    const {id} = useParams()
    console.log(id)
    /* const url = new URL(
        "https://6580ac733dfdd1b11c41efc7.mockapi.io/royalplast/products"
      );
      url.searchParams.append("category", id);
      const { productsData } = useGetProductsInfo(url, id);
      console.log(productsData) */
      const {productsByCategory} = useGetProductsByCategory(id)

  return <ItemListContainer productsData = {productsByCategory}/>
};
