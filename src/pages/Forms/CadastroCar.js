import React, { useState, useEffect } from 'react';
import styles from './styled.module.scss';
import { useHistory } from 'react-router-dom';
import useApi from '../../service/Api';
import Loading from '../../components/Loading';

const CadastroCar = () => {
    const api = useApi();
    const history = useHistory();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const chekLogin = async () => {
            if (api.getToken()) {
                const result = await api.validateToken();
                if (result.error === '') {
                    setLoading(false);
                } else {
                    alert(result.error);
                    window.location.href = '/login'; //dar o refresh na página
                    localStorage.removeItem('token');
                }
            } else {
                history.push('/login');
            }
        };
        chekLogin();
    }, []);

    return (
       <div className={`${styles.formGeral} animeLeft`}>
          {loading && <Loading />}
          {!loading && (
             <>
                <h2>Cadastrar Carro</h2>
                <form >
                   <input type="text" placeholder="Marca" />
                   <input type="text" placeholder="Modelo" />
                   <input type="text" placeholder="Ano" />
                   <input type="text" placeholder="Preço" />
                   <input type="file" />

                   <button>Cadastrar carro</button>
                </form>
             </>
          )}
       </div>
    );
};

export default CadastroCar;
