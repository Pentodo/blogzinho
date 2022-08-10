import db from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { useState } from 'react';

export const useAuth = () => {
	const [loading, setLoading] = useState(false);

	const auth = getAuth(db.app);

	const register = (data) => {
		setLoading(true);
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	};

	const login = (data) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, data.email, data.password)
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	};

	const logout = () => signOut(auth).catch((error) => console.log(error));

	return {
		auth,
		loading,
		register,
		login,
		logout,
	};
};
