import { URL_GET_VOITURES, URL_HTTP } from "../constants/urlConstant";

const getVoitures = async () => {
    let res = null;
    await fetch((URL_HTTP + URL_GET_VOITURES), { method: 'GET', mode: 'cors', cache: 'default' })
    .then(response => response.json())
    .then(data => res = data);
    return res;
};

const addVoitures = async ({ sigleMarque, model }) => {
    return fetch((URL_HTTP + URL_GET_VOITURES), 
    { 
        method: 'POST', 
        headers: {'Content-Type':'text/plain;charset=utf-8'},
        body: JSON.stringify({Marque: {Sigle: sigleMarque}, Model: model}),
        mode: 'cors', 
        credentials: 'same-origin',
        cache: 'default', 
        redirect: 'follow'
    })
};

export { getVoitures, addVoitures };