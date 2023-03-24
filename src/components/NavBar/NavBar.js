import { Link } from "react-router-dom"
const NavBar = () => {
    return(
        <nav>
            <h1>Ecommerce</h1>
            <div>
                <Link to='/item/Remeras'>Remeras</Link>
                <Link to='/item/Pantalones'>Pantalones</Link>
                <Link to='/item/Buzos'>Buzos</Link>
            </div>
        </nav>
    )
}
export default NavBar