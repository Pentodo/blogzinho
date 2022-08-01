import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/other'>Other</NavLink>
		</nav>
	);
};

export default Navbar;
