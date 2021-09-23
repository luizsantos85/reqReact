export const isLogged = () => {
    let token = localStorage.getItem('token');
    return token ? true : false;
};

export const doLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
};
