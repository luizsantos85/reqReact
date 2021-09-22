import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import Card from '../../components/Cards';
import Loading from '../../components/Loading';

const Home = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCars = () => {
        setCars([]);
        setLoading(true);
        fetch('https://apilaravel.lhscode.com.br/public/api/cars')
            .then((result) => result.json())
            .then((json) => {
                setLoading(false);

                if (json.error === '') {
                    setCars(json.cars);
                }
            });
    };

    useEffect(() => {
        getCars();
    }, []);

    return (
        <section className={`${styles.home} animeLeft`}>
            <div className="container">
                <h1>Mostruário de Carros</h1>

                <article>
                    {loading && <Loading />}
                    {cars.map((item) => (
                        <Card data={item} key={item.id} />
                    ))}
                </article>
            </div>
        </section>
    );
};

export default Home;
