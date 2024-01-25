import "./ProductCard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import {ItemCount} from "./itemCount";

const ProductCard = ({id, image, title, description, price}) => {
          return (
            <Card key={id} style={{ display: "flex", alignItems:"center", justifyContent:"center", gap:5, width: "18rem"}}>
              <Card.Img variant="top" src={image}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <div>{price}</div>
                <ItemCount/>
                <div className="masInfo" style={{ display: "flex", alignItems:"center", justifyContent:"center", gap:5, width:"100%", margin: 5}}>
                <Link to={`/item/:${id}`}><Button variant="primary">Más Info</Button></Link>
                </div> 
              </Card.Body>
            </Card>  
  );
};

export default ProductCard;