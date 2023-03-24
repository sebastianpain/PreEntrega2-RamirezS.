import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { Link, useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])
    
    const {categoryId} = useParams()

    useEffect(()=>{
        const asynFunction = categoryId ? getProductsByCategory: getProducts
        asynFunction(categoryId)
        .then(res => {
            setProducts(res)
})
.catch(error => {
    console.log(error)

})
    },[categoryId])
return(
    <div>
        <div>
        <h1>{greeting}</h1>
        {
            products.map(prod => {
                return(
                    <div key={prod.id}>
                        <h3>{prod.name}</h3>
                        <Link to={`/item/${prod.id}`}>ver detalle</Link>
                    </div>
                )
            })
        }
        </div>
    </div>
)
}

export default ItemListContainer