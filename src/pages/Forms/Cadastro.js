import React from 'react';
import styles from './styled.module.scss';

const Cadastro = () => {
    return (
        <div className={`${styles.formGeral} animeLeft`}>
            <h2>Cadastro</h2>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button>Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;
