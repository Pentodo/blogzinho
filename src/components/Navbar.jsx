import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
	const { user } = useContext(AuthContext);

	return (
		<nav className={styles.navbar}>
			<Link to='/' className={styles.logo}>
				<span>blog</span>zinho
			</Link>
			<div className={styles.links}>
				<NavLink to='/'>Home</NavLink>
				{!user && <NavLink to='/login'>Login</NavLink>}
			</div>
		</nav>
	);
};

export default Navbar;
