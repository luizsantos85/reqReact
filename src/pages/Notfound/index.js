import React from 'react';
import styles from './styles.module.scss';

const Notfound = () => {
    return (
        <section className={`${styles.notfound} animeLeft`}>
            <div className="conatiner">
                <h1>404</h1>
                <p>Página não encontrada.</p>
            </div>
        </section>
    );
};

export default Notfound;
