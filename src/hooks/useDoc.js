import db from '../firebase/config';
import { collection, addDoc, Timestamp, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useDoc = (colPath) => {
	const [loading, setLoading] = useState(false);

	const [colRef] = useState(collection(db, colPath));
	const [documents, setDocuments] = useState();

	const createDoc = (document) => {
		setLoading(true);

		try {
			new URL(document.img);
		} catch {
			return;
		}

		document.createAt = Timestamp.now();

		return addDoc(colRef, document)
			.catch((error) => console.log(error))
			.finally(setLoading(false));
	};

	useEffect(() => {
		const loadDocs = () => {
			try {
				onSnapshot(colRef, (querySnapshot) => {
					setDocuments(
						querySnapshot.docs.map((doc) => ({
							id: doc.id,
							...doc.data(),
						}))
					);
				});
			} catch (error) {
				console.log(error);
			}
		};

		loadDocs();
	}, [colRef]);

	return {
		loading,
		documents,
		createDoc,
	};
};
