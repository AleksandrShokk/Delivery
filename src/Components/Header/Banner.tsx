import React, { FC } from 'react';
import BI from '../Interfaces/bannerIU';

const Banner: FC = () => {
	const bannerItems = [
		{
			background: 'black',
			title: 'Доставка из ресторана в керамической посуде',
			text: 'qwer',
			storyesButt: 'Сториз о сервисе',
		},
		{
			background: 'black',
			title: 'Только башни',
		},
	];
	return (
		<div className='banners'>
			<div className='container'>
				{bannerItems.map(items => (
					<div className='banners-items'>
						<div className='banner-title'>{items.title}</div>
						<div className='banner-text'>{items.text}</div>
						<button className='storyes' type='button'>
							{items.storyesButt}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Banner;
