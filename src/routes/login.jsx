import styles from './Login.module.css';

const Login = () => {
	return (
		<div className={styles.Login}>
			<h1>Login</h1>
			<p>Crie ou logue em sua conta abaixo:</p>
			<div className={styles.forms}>
				<form>
					<h2>Registrar</h2>
					<label>
						E-mail: <input type='email' id='register-email' />
					</label>
					<label>
						Senha: <input type='password' id='register-password' />
					</label>
					<input type='button' value='>>' />
				</form>
				<form>
					<h2>Entrar</h2>
					<label>
						E-mail: <input type='email' id='login-email' />
					</label>
					<label>
						Senha: <input type='password' id='login-password' />
					</label>
					<input type='button' value='>>' />
				</form>
			</div>
		</div>
	);
};

export default Login;
