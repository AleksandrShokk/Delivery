import React, { FC } from 'react';
import logoImg from '../../img/logo';
import Profile from '../../img/profile';
import WhatsApp from '../../img/WhatsApp';

const Nav: FC = () => {
	return (
		<header className='header'>
			<div className='container'>
				<nav className='header-nav'>
					<a className='header__logo' href='/'>
						<svg
							width='140'
							height='40'
							viewBox='0 0 140 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							{logoImg}
						</svg>
					</a>

					<button className='nav__connection'>
						<svg
							width='20'
							height='20'
							viewBox='0 0 21 21'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							{WhatsApp}
						</svg>
						WhatsApp
					</button>
					<button className='nav__order'>Заказать 1 блюдо за 430Р</button>
					<button className='nav__profile'>
						<svg
							width='16'
							height='20'
							viewBox='0 0 16 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							{Profile}
						</svg>
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Nav;
