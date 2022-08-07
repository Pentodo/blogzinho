import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className={styles.NotFound}>
			<h1>Página não encontrada!</h1>
			<Link to='/'>Clique aqui para voltar.</Link>
		</div>
	);
};

export default NotFound;
