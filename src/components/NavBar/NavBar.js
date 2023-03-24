<<<<<<< HEAD
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1>Ecommerce</h1>
            <div>
                <NavLink to='/Item/1' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Remeras</NavLink>
                <NavLink to='/Item/2'className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Pantalones</NavLink>
                <NavLink to='/Item/3' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Buzos</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
=======
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
>>>>>>> cd92e069c7458bac45182549b9e655842eaada8b
