import React from 'react';
import './Header.css'

const Header = (props) => {

    const { screen } = props;

    return (
        <header className='nav'>
            <h1>{screen}</h1>
        </header>
    )
}

export default Header;