import './header.css'
import LogoImg from '../img/logo-blue.gif'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link to="/" ><img src={LogoImg} alt="Logo Blue"/></Link>
            <nav>
            <Link className="logo" to="/" >Home</Link>
            <Link className="favoritos" to="/favoritos">Favoritos</Link> 
            </nav>
        </header>
    )
}
