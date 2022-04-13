import React from 'react';
import { URL_BASE, URL_HTTP } from '../../constants/urlConstant';
import Page404 from '../Page404/Page404';
import PageAcceuil from '../PageAccueil/PageAccueil';

const Routing = () => {
    const wichRouteIs = () => {
        const url = document.URL.split(URL_HTTP)[1];
        let page = null;
        switch(url){
            case URL_BASE : page = <PageAcceuil/>; break;
            default : page = <Page404/>; break;
        };
        return page;
    };

    
    const page = wichRouteIs();
    return (
    <div>
        {page}
    </div>
    );
};

export default Routing;