import styles from './App.module.css';
import Post from './components/Post';
import { useDoc } from './hooks/useDoc';

function App() {
	const { documents: posts } = useDoc('posts');

	return (
		<div className='App'>
			<h1>Postagens</h1>
			<p>Confira as novidades abaixo:</p>
			<div className={styles.posts}>
				{posts && posts.map((post) => <Post post={post} key={post.id} />)}
			</div>
		</div>
	);
}

export default App;
