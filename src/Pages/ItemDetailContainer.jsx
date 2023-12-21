import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard";
import { useGetProductsInfo } from "../hooks/useGetProductsInfo";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  //console.log(id.substring(1, 9))
  const url = new URL(
    "https://6580ac733dfdd1b11c41efc7.mockapi.io/royalplast/products"
  );
  url.searchParams.append("id", id.substring(1, 9));
  const { productsData } = useGetProductsInfo(url);
  //desestructuramos el objeto obtenido del custom Hook useGetProductsInfo
  //console.log(productsData)

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
      {productsData.map((product) => {
        return (
          <ProductCard
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};
