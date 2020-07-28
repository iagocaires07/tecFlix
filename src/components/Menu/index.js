import React from'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/tecFlix.png';
import './styles.css';
import Button from '../Button';

//import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="TecFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastrar/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;