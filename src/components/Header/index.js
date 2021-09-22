import React from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>LHSCODE</div>
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                activeClassName={styles.active}
                            >
                                Home
                            </NavLink>
                        </li>
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
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
