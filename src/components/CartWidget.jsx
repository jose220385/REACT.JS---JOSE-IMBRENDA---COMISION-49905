import { useContext } from "react"
import "./CartWidget.css"
import {CartContext} from "../context/CartContext"

export const CartWidget =()=>{
const {count} = useContext(CartContext)
    return (
    <div className="cartWidget">
        <h4>🛒</h4>
        <span className="itemCartWidget">{count}</span>
    </div>
    )
}
