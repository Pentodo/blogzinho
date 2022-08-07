import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { loading, createUser } = useAuth();

	const handleRegister = (e) => {
		e.preventDefault();

		if (loading) {
			return;
		}

		const data = { email, password };
		createUser(data).then((res) => console.log(res));
	};

	return (
		<div className={styles.Login}>
			<h1>Login</h1>
			<p>Crie ou logue em sua conta abaixo:</p>
			<div className={styles.forms}>
				<form onSubmit={handleRegister}>
					<h2>Registrar</h2>
					<label>
						E-mail:{' '}
						<input
							type='email'
							id='register-email'
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<label>
						Senha:{' '}
						<input
							type='password'
							id='register-password'
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label>
					<input type='submit' value='>>' disabled={loading} />
				</form>
				<form>
					<h2>Entrar</h2>
					<label>
						E-mail:{' '}
						<input
							type='email'
							id='login-email'
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<label>
						Senha:{' '}
						<input
							type='password'
							id='login-password'
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label>
					<input type='submit' value='>>' disabled={loading} />
				</form>
			</div>
		</div>
	);
};

export default Login;
