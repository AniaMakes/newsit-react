import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({}) => {

	return (
		<div className='navbar-component'>
			<button><Link to='/default'>Home</Link></button>
			<button><Link to='/customise'>Customise</Link></button>
		</div>);
};



export default NavBar;
