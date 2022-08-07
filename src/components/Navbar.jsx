import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth';
import styles from './Navbar.module.css';

const Navbar = () => {
	const { user } = useContext(AuthContext);
	const { logout } = useAuth();

	return (
		<nav className={styles.navbar}>
			<Link to='/' className={styles.logo}>
				<span>blog</span>zinho
			</Link>
			<div className={styles.links}>
				<NavLink to='/'>Home</NavLink>
				{user ? (
					<Link to='/' onClick={logout}>
						Logout
					</Link>
				) : (
					<NavLink to='/login'>Login</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
