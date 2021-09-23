import React,{useEffect,useState} from 'react';
import styles from './styled.module.scss';

const Cadastro = () => {

    return (
        <div className={`${styles.formGeral} animeLeft`}>
            <h2>Cadastro de usuário</h2>
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
