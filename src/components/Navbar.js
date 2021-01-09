import React, { component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../icon.png'
import styled from 'styled-components'
import { ButtonContainer } from "./Button";


export default class Navbar extends React.Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px=sm-5">
				{/*
				 https://www.iconfinder.com/icons/1243689/call_phone_icon creative
				 Commons (Attribution 3.0 unported);
				 https://www.iconfinder.com/Makoto_msk */}
				<Link to="/">
					<img src={logo} alt="store" className="navbar-brand" />
				</Link> 
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							products
							</Link>
					</li>
				</ul>
				<Link to='/cart' className="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
						My Cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
color:var(--mainwhite) !important;
font-size:1.3rem;
text-transform: capitalize;
}

`;
