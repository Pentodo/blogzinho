import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link to='/' className={styles.logo}>
				<span>blog</span>zinho
			</Link>
			<div className={styles.links}>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/other'>Other</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
