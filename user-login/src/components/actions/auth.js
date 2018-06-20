import api;

export const login = (credentials) => (dispa tch) => 
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));