import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css"
import  {CartContext}  from "../context/CartContext";

export const ItemCount = () => {
    const [countItem, setCountItem] = useState(1)
    const {count, setCount} = useContext(CartContext)

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
    setCountItem(countItem - 1);
  };

  return (
    <div className="ItemCountContainer" >
      <div className="ItemCountButtonsContainer">
        <Button onClick={handleRemove}>-</Button>
        <h6>{countItem}</h6>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <Button onClick={()=>{
        setCount(countItem + count)
        setCountItem(1)
        }}>Agregar al Carrito</Button>
    </div>
  );
};
