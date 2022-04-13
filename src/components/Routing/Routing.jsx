import React from 'react';
import { URL_BASE, URL_HTTP, URL_VOITURES_LIST } from '../../constants/urlConstant';
import Page404 from '../Page404/Page404';
import PageAcceuil from '../PageAccueil/PageAccueil';
import PageListVoitures from '../PagesVoitures/PageListVoitures';
import BandeauHaut from "../BandeauHaut/BandeauHaut";

const Routing = () => {
    const url = document.URL.split(URL_HTTP)[1];
    const wichRouteIs = () => {
        let page = null;
        switch(url){
            case URL_BASE : page = <PageAcceuil/>; break;
            case URL_BASE + URL_VOITURES_LIST : page = <PageListVoitures/>;break;
            default : page = <Page404/>; break;
        };
        return page;
    };
    const page = wichRouteIs();
    return (
    <div>
        <BandeauHaut url={url} />
        {page}
    </div>
    );
};

export default Routing;