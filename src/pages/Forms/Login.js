import React from 'react';
import styles from './styled.module.scss';

const Login = () => {
    return (
        <div className={`${styles.formGeral} animeLeft`}>
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="E-mail" autofocus />
                <input type="password" placeholder="Senha" />
                <button>Logar</button>
            </form>
        </div>
    );
};

export default Login;
