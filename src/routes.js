import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Forms/Login';
import Cadastro from './pages/Forms/Cadastro';
import Notfound from './pages/Notfound';
import CadastroCar from './pages/Forms/CadastroCar';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/cadastro" component={Cadastro} exact />
            <Route path="/car-register" component={CadastroCar} exact />

            <Route path="*" component={Notfound} exact />
        </Switch>
    );
};

export default Routes;
