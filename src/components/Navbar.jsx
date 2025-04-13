import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar(){
    return(
        <nav className='nav'>
            <h1>Marvel Rivals Matchmaker</h1>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li> 
                    <a href='/teams'>Teams</a>
                </li>
                <li>
                    <a href='/profile'>Profile</a>
                </li>

            </ul>
        </nav>
    );
}