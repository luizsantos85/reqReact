import React, { useState, useEffect, useRef } from 'react';
import styles from './styled.module.scss';
import { useHistory } from 'react-router-dom';
import useApi from '../../service/Api';
import Loading from '../../components/Loading';

const CadastroCar = () => {
   const api = useApi();
   const history = useHistory();

   const [loading, setLoading] = useState(true);
   const [marca, setMarca] = useState('');
   const [modelo, setModelo] = useState('');
   const [ano, setAno] = useState('');
   const [preco, setPreco] = useState('');
   const [photo, setPhoto] = useState('');
    const photoField = useRef();
   const [error, setError] = useState([]);

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      setError('');
      let errors = [];
      if (!marca.trim() || !modelo.trim() || !ano.trim() || !preco.trim()) {
         errors.push('Preencha todos os campos');
      }

      if (errors.length === 0) {
         let body = new FormData();
         body.append('brand',marca);
         body.append('name', modelo);
         body.append('year', ano);
         body.append('price', preco);

         if(photoField.current.files.length > 0){
            body.append('photo',photoField.current.files[0]);
         }

         const json = await api.addCar(body);

         if (!json.error) {
            history.push('/');
            return;
         } else {
            setError(json.error);
         }
      } else {
         setError(errors);
      }
   };

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
               <form onSubmit={handleFormSubmit}>
                  {error && <div className={styles.error}>{error}</div>}
                  <input
                     type="text"
                     placeholder="Marca"
                     disabled={loading}
                     value={marca}
                     onChange={(e) => setMarca(e.target.value)}
                  />
                  <input
                     type="text"
                     placeholder="Modelo"
                     disabled={loading}
                     value={modelo}
                     onChange={(e) => setModelo(e.target.value)}
                  />
                  <input
                     type="number"
                     placeholder="Ano"
                     disabled={loading}
                     value={ano}
                     onChange={(e) => setAno(e.target.value)}
                  />
                  <input
                     type="number"
                     placeholder="Preço"
                     disabled={loading}
                     value={preco}
                     onChange={(e) => setPreco(e.target.value)}
                  />
                  <input
                     type="file"
                     ref={photoField}
                     disabled={loading}
                  />

                  <button disabled={loading}>
                     {loading ? 'Carregando...' : 'Cadastrar carro'}
                  </button>
               </form>
            </>
         )}
      </div>
   );
};

export default CadastroCar;
