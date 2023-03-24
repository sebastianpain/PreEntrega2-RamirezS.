import { Link } from "react-router-dom"
const NavBar = () => {
    return(
        <nav>
            <h1>Ecommerce</h1>
            <div>
                <Link to='/item1/Remeras'>Remeras</Link>
                <Link to='/item2/Pantalones'>Pantalones</Link>
                <Link to='/item3/Buzos'>Buzos</Link>
            </div>
        </nav>
    )
}
export default NavBar
