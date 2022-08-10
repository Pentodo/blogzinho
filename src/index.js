import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import NotFound from './routes/NotFound';
import Login from './routes/Login';

import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { AuthContext } from './context/AuthContext';
import CreatePost from './routes/CreatePost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Auth>
			<BrowserRouter>
				<Navbar />
				<div className='container'>
					<Routes>
						<Route path='/' element={<App />} />
						<Route
							path='/login'
							element={
								<AuthContext.Consumer>
									{({ user }) => (user ? <Navigate to='/' /> : <Login />)}
								</AuthContext.Consumer>
							}
						/>
						<Route path='posts/create' element={<CreatePost />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</Auth>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
