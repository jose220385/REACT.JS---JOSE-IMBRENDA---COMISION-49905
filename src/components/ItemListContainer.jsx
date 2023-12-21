import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductCard from "./productCard";

const ItemListContainer = ({ productsData }) => {
  return (
      <div style={{display: "flex", flexWrap:"wrap", gap: 15}}>
        {productsData.map((product) => {
          return (
            <ProductCard id= {product.id} image={product.image} title={product.title} description={product.description} price ={product.price} />
           /*  <Card key={product.id} style={{ width: "18rem"}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
                <div>{product.price}</div>
                <Button variant="primary">Más Info</Button>
              </Card.Body>
            </Card> */
          );
        })}
      </div>
  );
};

export default ItemListContainer;
