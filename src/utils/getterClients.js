import { URL_GET_CLIENTS, URL_HTTP } from "../constants/urlConstant";
import uuid from 'react-uuid'

const getClients = async () => {
    let res = null;
    await fetch((URL_HTTP + URL_GET_CLIENTS), { method: 'GET', mode: 'cors', cache: 'default' })
    .then(response => response.json())
    .then(data => res = data);
    return res;
};

const addClient = async (nom) => {
    return fetch((URL_HTTP + URL_GET_CLIENTS), 
    { 
        method: 'POST', 
        headers: {'Content-Type':'text/plain;charset=utf-8'},
        body: JSON.stringify({Nom: nom, Numero: uuid()}),
        mode: 'cors', 
        credentials: 'same-origin',
        cache: 'default', 
        redirect: 'follow'
    })
};

export { getClients, addClient };