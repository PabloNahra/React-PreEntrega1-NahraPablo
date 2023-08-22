import carrito from "../assets/carrito.svg"

export default function CartWidget(){

    return(
        <div>
            <img style={{width: 50}} src={carrito} alt="carrito"/>
            <span> 0 </span>
        </div>
    )

}