import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.scss';

const NavBar = ({}) => {
	return (
		<div className='navbar-component'>
			<button className='btn-nav btn-home'><Link to='/default'>Home</Link></button>
			<button className='btn-nav btn-customise'><Link to='/customise'>Customise</Link></button>
			<button className='btn-nav btn-world-news'><Link to='/world-news'>WorldNews</Link></button>
		</div>);
};

export default NavBar;
