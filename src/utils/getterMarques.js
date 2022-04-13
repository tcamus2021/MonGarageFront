import { URL_GET_MARQUES, URL_HTTP } from "../constants/urlConstant";

const getMarques = async () => {
    let res = null;
    await fetch((URL_HTTP + URL_GET_MARQUES), { method: 'GET', mode: 'cors', cache: 'default' })
    .then(response => response.json())
    .then(data => res = data);
    return res;
};

export default getMarques;