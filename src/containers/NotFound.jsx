import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section className="error">
    <section className="error__container">
      <h2 className="error__container--title">404</h2>
      <p>Página no encontrada</p>
      <Link to='/'>Regresa al home</Link>
    </section>
  </section>
)

export default NotFound;