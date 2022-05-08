import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* ---> Website Elements <--- */
import Header from './elements/Header'
import Footer from './elements/Footer'

/* ---> Pages <--- */
import Main from './pages/Main'
import NotFound from './pages/NotFound'

function App() {
	return (
		<>
			<Header />

			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />}/>
					<Route path='*' element={<NotFound />}/>
				</Routes>
			</BrowserRouter>

			<Footer />
		</>
	);
}

export default App;
