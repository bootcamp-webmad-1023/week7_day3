import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'selected' : ''}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'selected' : ''}>Sobre mi</NavLink>

                </li>
                <li>
                    <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'selected' : ''}>Proyectos</NavLink>

                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
