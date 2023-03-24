import {useState} from "react"
const ItemCount = ({stock, onAdd}) => {
const [count, setCount] = useState(1)

const decrement =()=> setCount(prev => prev -1 )

const increment = () => setCount(prev => prev+1)
    return (
        <div>
            <h3>
                {count}
            </h3>
            <button onclick={decrement}></button>
            <button onclick={increment}>incrementar</button>
            <button onclick={()=> onAdd(count)} disabled={stock===0}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount