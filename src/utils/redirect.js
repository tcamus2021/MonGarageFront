import { URL_BASE, URL_HTTP } from "../constants/urlConstant";

export const redirectToModify = (url, id) => {
    window.location.replace(URL_HTTP + URL_BASE + url + id);
};