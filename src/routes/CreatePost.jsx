import { useContext, useState } from 'react';
import { useDoc } from '../hooks/useDoc';
import { AuthContext } from '../context/AuthContext';

import styles from './CreatePost.module.css';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [img, setImg] = useState('');
	const [content, setContent] = useState('');

	const { loading, createDoc } = useDoc('posts');
	const { user } = useContext(AuthContext);

	const handlePost = (e) => {
		e.preventDefault();

		createDoc({ title, img, content, uid: user.uid, createdBy: user.email });

		setTitle('');
		setImg('');
		setContent('');
	};

	return (
		<div className={styles.CreatePost}>
			<h1>Postar</h1>
			<p>Crie alguma coisa legal:</p>
			<form onSubmit={handlePost}>
				<div>
					<label>
						Título:{' '}
						<input
							type='text'
							id='title'
							placeholder='Um título.'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
					</label>
					<label>
						Imagem:{' '}
						<input
							type='text'
							id='img'
							placeholder='O link da imagem.'
							value={img}
							onChange={(e) => setImg(e.target.value)}
							required
						></input>
					</label>
					<label>
						Conteúdo:{' '}
						<textarea
							id='content'
							placeholder='A mensagem.'
							value={content}
							onChange={(e) => setContent(e.target.value)}
							required
						></textarea>
					</label>
				</div>
				<input type='submit' value='Criar' disabled={loading} />
			</form>
		</div>
	);
};

export default CreatePost;
