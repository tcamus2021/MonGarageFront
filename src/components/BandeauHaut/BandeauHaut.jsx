import React from "react";
import { MES_CLIENTS, MES_FICHES, MES_MARQUES, MES_VOITURES, NAME_SITE } from "../../constants/textConstants";

const BandeauHaut = () => (
    <nav class="navbar navbar-expand-lg bg-warning border-bottom border-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{NAME_SITE}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">{MES_FICHES}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">{MES_CLIENTS}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">{MES_VOITURES}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">{MES_MARQUES}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default BandeauHaut;