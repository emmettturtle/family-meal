import * as usersAPI from './users-api';
//^ for importing all of the file

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

export function getToken(){
    //getItem returns null if no string
    //get the token
    const token = localStorage.getItem('token');
    //if no token in local storage
    if(!token) return null;
    //get payload of token and decode
    const payload = JSON.parse(atob(token.split('.')[1]));
    //check if expired
    if(payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }

    return token;
}

export function getUser() {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut() {
    localStorage.removeItem('token');
}

export function checkToken() {
    return usersAPI.checkToken().then(dateStr => new Date(dateStr));
}