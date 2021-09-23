import React from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { isLogged, doLogout } from '../../Helper/AuthHandler';

const Header = () => {
   const logged = isLogged();
   const handleLogout = () => {
      doLogout();
   };

   return (
      <header>
         <div className={`container ${styles.container}`}>
            <div className={styles.logo}>LHSCODE</div>
            <nav className={styles.menu}>
               <ul>
                  <li>
                     <NavLink to="/" exact activeClassName={styles.active}>
                        Home
                     </NavLink>
                  </li>
                  {!logged && (
                     <>
                        <li>
                           <NavLink
                              to="/cadastro"
                              exact
                              activeClassName={styles.active}
                           >
                              Cadastro
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/login"
                              exact
                              activeClassName={styles.active}
                           >
                              Login
                           </NavLink>
                        </li>
                     </>
                  )}

                  {logged && (
                     <>
                        <li>
                           <NavLink
                              to="/car-register"
                              exact
                              activeClassName={styles.active}
                           >
                              Cadastrar-carro
                           </NavLink>
                        </li>
                     </>
                  )}
               </ul>
               {logged && (
                  <button className={styles.logout} onClick={handleLogout}>
                     Sair
                  </button>
               )}
            </nav>
         </div>
      </header>
   );
};

export default Header;
