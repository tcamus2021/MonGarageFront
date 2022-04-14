import { URL_GET_CLIENTS, URL_HTTP } from "../constants/urlConstant";

const getClients = async () => {
    let res = null;
    await fetch((URL_HTTP + URL_GET_CLIENTS), { method: 'GET', mode: 'cors', cache: 'default' })
    .then(response => response.json())
    .then(data => res = data);
    return res;
};

export default getClients;