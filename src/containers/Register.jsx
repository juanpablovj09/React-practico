import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
    const [form, setValues] = useState({
		email: "",
		name: "",
		password: ""
	});

const handleInputUpdate = e => {
	setValues({
		...form,
		[e.target.name]: e.target.value
	})
}

const handleSubmit = (e) => {
	e.preventDefault();
	props.registerRequest(form);
	console.log(form)
	props.history.push("/")
}

	return(
	<>
		<Header isRegister />
		<section className='register'>
			<section className='register__container'>
				<h2>Regístrate</h2>
				<form className='register__container--form' onSubmit={handleSubmit}>
					<input 
						name= 'name'
						className='input' 
						type='text' 
						placeholder='Nombre' 
						onChange={handleInputUpdate}/>
					<input 
						name="email"
						className='input' 
						type='text' 
						placeholder='Correo' 
						onChange={handleInputUpdate}/>
					<input 
						name="password"
						className='input' 
						type='password' 
						placeholder='Contraseña' 
						onChange={handleInputUpdate}/>
					<button className='button'>Registrarme</button>
				</form>
				<Link to="/login">Iniciar sesión</Link>
			</section>
		</section>
	</>
    )
};

const mapDispatchToProps = {
	registerRequest
}

export default connect(null, mapDispatchToProps)(Register);