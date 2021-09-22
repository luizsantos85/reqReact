import React from 'react';
import styles from './styles.module.scss';

const Card = ({ data }) => {
    let price = parseInt(data.price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <div className={styles.card}>
            <img src={data.photo} alt={data.name} className={styles.img} />
            <div className={styles.description}>
                <p>Marca: {data.brand} - Ano: {data.year}</p>
                <p>Modelo: {data.name}</p>
                <p>Preço: {price}</p>
            </div>
        </div>
    );
};

export default Card;
