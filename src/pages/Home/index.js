import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import useApi from '../../service/Api';
import Card from '../../components/Cards';
import Loading from '../../components/Loading';

const Home = () => {
   const api = useApi();
   const [cars, setCars] = useState([]);
   const [loading, setLoading] = useState(false);

   const getCars = async () => {
      setCars([]);
      setLoading(true);
      const result = await api.getAllCars();
      setLoading(false);
      if (result.error === '') {
         setCars(result.cars);
      } else {
         alert(result.error);
      }
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
