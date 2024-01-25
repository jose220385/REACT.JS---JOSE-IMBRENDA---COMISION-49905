import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard";
import { useGetProductById } from "../hooks/useGetProductById";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id)

  let idWithoutPoints = id.substring(1);
  console.log(idWithoutPoints)
  const {productById} = useGetProductById(idWithoutPoints)
    console.log(productById)
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
          <ProductCard
            id={productById.id}
            image={productById.image}
            title={productById.title}
            description={productById.description}
            price={productById.price}
          />
    </div>
  );
};
