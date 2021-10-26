import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss'

const Search = ({ isHome }) => {
    const main__title = "¿Qué quieres ver hoy?";
    const placehorder__input = "Buscar..."
    
    const inputStyle = classNames('input', {
        isHome
    });

    return (
        <section className="main">
            <h2 className="main__title">{main__title}</h2>
            <input type="text" className={inputStyle} placeholder={placehorder__input} />
        </section>
    );
};

export default Search;