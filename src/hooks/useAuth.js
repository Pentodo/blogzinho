import db from '../firebase/config';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export default function useAuth() {
	const [loading, setLoading] = useState(false);

	const auth = getAuth();

	const createUser = async (data) => {
		setLoading(true);

		let user;
		try {
			const UserCredential = createUserWithEmailAndPassword(auth, data.email, data.password);
			user = (await UserCredential).user;
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
		return user;
	};

	return {
		loading,
		createUser,
	};
}
