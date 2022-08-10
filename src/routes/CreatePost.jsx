import styles from './CreatePost.module.css';

const CreatePost = () => {
	return (
		<div className={styles.CreatePost}>
			<h1>Postar</h1>
			<p>Crie alguma coisa legal:</p>
			<form>
				<div>
					<label>
						Título: <input type='text' id='title' placeholder='Um título.' />
					</label>
					<label>
						Imagem: <input type='text' id='img' placeholder='O link da imagem.'></input>
					</label>
					<label>
						Conteúdo: <textarea id='content' rows={3} placeholder='A mensagem.'></textarea>
					</label>
				</div>
				<input type='submit' value='Criar' />
			</form>
		</div>
	);
};

export default CreatePost;
