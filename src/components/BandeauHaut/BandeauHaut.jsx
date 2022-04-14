import React from "react";
import { MES_CLIENTS, MES_FICHES, MES_MARQUES, MES_VOITURES, NAME_SITE } from "../../constants/textConstants";
import { URL_BASE, URL_MARQUES_LIST, URL_VOITURES_LIST, URL_CLIENTS_LIST, URL_FICHES_LIST } from "../../constants/urlConstant";

const BandeauHaut = ({url}) => {
return (
    <nav className="navbar navbar-expand-lg bg-warning border-bottom border-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{NAME_SITE}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" href={url !== (URL_BASE + URL_FICHES_LIST) ? '/' + URL_FICHES_LIST : null}>{MES_FICHES}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={url !== (URL_BASE + URL_CLIENTS_LIST) ? '/' + URL_CLIENTS_LIST : null}>{MES_CLIENTS}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={url !== (URL_BASE + URL_VOITURES_LIST) ? '/' + URL_VOITURES_LIST : null}>{MES_VOITURES}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={url !== (URL_BASE + URL_MARQUES_LIST) ? '/' + URL_MARQUES_LIST : null}>{MES_MARQUES}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)};

export default BandeauHaut;