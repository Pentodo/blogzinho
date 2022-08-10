import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from './Login.module.css';

const Login = () => {
	const { loading, register, login } = useAuth();

	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	const handleRegister = (e) => {
		e.preventDefault();
		register({ email: registerEmail, password: registerPassword });
	};

	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		login({ email: loginEmail, password: loginPassword });
	};

	return (
		<div className={styles.Login}>
			<h1>Login</h1>
			<p>Crie ou logue em sua conta:</p>
			<div className={styles.forms}>
				<form onSubmit={handleRegister}>
					<h2>Registrar</h2>
					<div>
						<label>
							E-mail:{' '}
							<input
								type='email'
								id='register-email'
								onChange={(e) => setRegisterEmail(e.target.value)}
								required
							/>
						</label>
						<label>
							Senha:{' '}
							<input
								type='password'
								id='register-password'
								onChange={(e) => setRegisterPassword(e.target.value)}
								required
							/>
						</label>
					</div>
					<input type='submit' value='>>' disabled={loading} />
				</form>
				<form onSubmit={handleLogin}>
					<h2>Entrar</h2>
					<div>
						<label>
							E-mail:{' '}
							<input
								type='email'
								id='login-email'
								onChange={(e) => setLoginEmail(e.target.value)}
								required
							/>
						</label>
						<label>
							Senha:{' '}
							<input
								type='password'
								id='login-password'
								onChange={(e) => setLoginPassword(e.target.value)}
								required
							/>
						</label>
					</div>
					<input type='submit' value='>>' disabled={loading} />
				</form>
			</div>
		</div>
	);
};

export default Login;
