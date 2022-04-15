import { URL_BASE, URL_GET_FICHES, URL_HTTP } from "../constants/urlConstant";

const getFiches = async () => {
    return fetch((URL_HTTP + URL_GET_FICHES), { 
        method: 'GET', 
        mode: 'cors', 
        cache: 'default' });
};

const addFiches = async ({ prix, clientId, voitureId }) => {
    return fetch((URL_HTTP + URL_GET_FICHES), 
    { 
        method: 'POST', 
        headers: {'Content-Type':'text/plain;charset=utf-8'},
        body: JSON.stringify({Prix: prix, Client: { IdClient: clientId }, Voiture: { IdVoiture: voitureId }}),
        mode: 'cors', 
        credentials: 'same-origin',
        cache: 'default', 
        redirect: 'follow'
    })
}

const deleteFiche = async (id) => {
    return fetch((URL_HTTP + URL_GET_FICHES + '/' + id), 
    { 
        method: 'POST', 
        headers: {'Content-Type':'text/plain;charset=utf-8'},
        mode: 'cors', 
        credentials: 'same-origin',
        cache: 'default', 
        redirect: 'follow'
    })
}

export { getFiches, addFiches, deleteFiche };