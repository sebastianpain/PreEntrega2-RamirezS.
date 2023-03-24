import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('item')
    }

    return (
        <div style={{ background: 'orange', margin: 10}} onClick={handleClick}>
            <h2>{name}</h2>
            <h3>precio: {price}</h3>
            <Link to={`/item/${id}`} style={{ background: 'white'}}>ver detalle</Link>
        </div>
    )
}

export default Item