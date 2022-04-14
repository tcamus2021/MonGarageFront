import { URL_GET_MARQUES, URL_HTTP } from "../constants/urlConstant";

const getMarques = async () => {
    let res = null;
    await fetch((URL_HTTP + URL_GET_MARQUES), { method: 'GET', mode: 'cors', cache: 'default' })
    .then(response => response.json())
    .then(data => res = data);
    return res;
};

const addMarques = async ({ sigle, marque }) => {
    return fetch((URL_HTTP + URL_GET_MARQUES), 
    { 
        method: 'POST', 
        headers: {'Content-Type':'text/plain;charset=utf-8'},
        body: JSON.stringify({Sigle: sigle, NomComplet: marque}),
        mode: 'cors', 
        credentials: 'same-origin',
        cache: 'default', 
        redirect: 'follow'
    })
};

export { getMarques, addMarques };