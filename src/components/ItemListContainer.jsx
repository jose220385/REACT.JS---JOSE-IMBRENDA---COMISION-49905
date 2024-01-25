import "./ItemListContainer.css";
import ProductCard from "./productCard";

const ItemListContainer = ({ productsData }) => {
  return (
      <div style={{display: "flex", flexWrap:"wrap", gap: 15, padding: 30}}>
        {productsData.map((product) => {
          return (
            <ProductCard id= {product.id} image={product.image} title={product.title} description={product.description} price ={product.price} />
          );
        })}
      </div>
  );
};

export default ItemListContainer;
