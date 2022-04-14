import { URL_GET_FICHES, URL_HTTP } from "../constants/urlConstant";

const getFiches = async () => {
    let res = null;
    await fetch((URL_HTTP + URL_GET_FICHES), { method: 'GET', mode: 'cors', cache: 'default' })
    .then(response => response.json())
    .then(data => res = data);
    return res;
};

export default getFiches;