import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Forms/Login';
import Cadastro from './pages/Forms/Cadastro';
import Notfound from './pages/Notfound';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/cadastro" component={Cadastro} exact />
            <Route path="*" component={Notfound} exact />
        </Switch>
    );
};

export default Routes;
