import React from 'react';
import styles from './styled.module.scss';
import useSpai from '../../service/Api.js';

const Login = () => {
    const api = useSpai();

    const [loading,setLoading] = React.useState(false)
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (email && password) {
            setLoading(true);
            const result = await api.login(email, password);
            setLoading(false);
            if (result.error === '') {
                localStorage.setItem('token', result.token);
                window.location.href = '/';
            } else {
                setError('E-mail e/ou senha inválidos.');
            }
        } else {
            setError('Preencha os campos corretamente.');
        }
    };

    return (
       <div className={`${styles.formGeral} animeLeft`}>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
             {error && <div className={styles.error}>{error}</div>}
             <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                disabled={loading}
             />
             <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                disabled={loading}
             />
             <button disabled={loading}>
                {loading ? 'Carregando...' : 'Logar'}
             </button>
          </form>
       </div>
    );
};

export default Login;
