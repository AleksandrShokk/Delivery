import { FC } from 'react';
import Banner from './Components/Header/Banner';
import Nav from './Components/Header/nav';

const App: FC = () => {
	return (
		<div className='App'>
			<Nav />
			<Banner />
		</div>
	);
};

export default App;
