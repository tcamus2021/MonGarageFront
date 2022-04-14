import React from 'react';
import { URL_BASE, URL_HTTP, URL_VOITURES_LIST, URL_MARQUES_LIST, URL_CLIENTS_LIST, URL_FICHES_LIST, URL_FICHES_NEW, URL_MARQUES_NEW } from '../../constants/urlConstant';
import Page404 from '../Page404/Page404';
import PageAcceuil from '../PageAccueil/PageAccueil';
import PageListVoitures from '../PagesVoitures/PageListVoitures';
import BandeauHaut from "../BandeauHaut/BandeauHaut";
import PageListMarques from '../PageMarques/PageListMarques';
import PageListClients from '../PageClients/PageListClients';
import PageListFiches from '../PageFiches/PageListFiches';
import PageCreationMarque from '../PageMarques/PageCreationMarques';

const Routing = () => {
    const url = document.URL.split(URL_HTTP)[1];
    const wichRouteIs = () => {
        let page = null;
        switch(url){
            case URL_BASE : page = <PageAcceuil/>; break;
            case URL_BASE + URL_FICHES_LIST : page = <PageListFiches/>;break;
            case URL_BASE + URL_MARQUES_NEW : page = <PageCreationMarque/>;break;
            case URL_BASE + URL_MARQUES_LIST : page = <PageListMarques/>;break;
            case URL_BASE + URL_VOITURES_LIST : page = <PageListVoitures/>;break;
            case URL_BASE + URL_CLIENTS_LIST : page = <PageListClients/>;break;
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