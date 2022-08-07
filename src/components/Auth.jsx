import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthContext } from '../context/AuthContext';

import { onAuthStateChanged } from 'firebase/auth';

import styles from './Auth.module.css';

const Auth = ({ children }) => {
	const [user, setUser] = useState(undefined);
	const { auth } = useAuth();

	useEffect(() => {
		const bodyStyle = document.body.style;

		onAuthStateChanged(auth, (user) => {
			setUser(user);
			bodyStyle.animation = 'fadeIn 0.5s';
		});

		return () => (bodyStyle.animation = 'none');
	}, [auth]);

	return user === undefined ? (
		<div className={styles.loading}>
			<img src='loading.gif' alt='loading'></img>
		</div>
	) : (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export default Auth;
