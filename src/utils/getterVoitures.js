import { URL_GET_VOITURES, URL_HTTP } from "../constants/urlConstant";

const getVoitures = async () => {
    let res = null;
    await fetch((URL_HTTP + URL_GET_VOITURES), { method: 'GET', mode: 'cors', cache: 'default' })
    .then(response => response.json())
    .then(data => res = data);
    return res;
};

export default getVoitures;