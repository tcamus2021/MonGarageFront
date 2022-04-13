import React from "react";
import { NAME_ACCUEIL, TEXT_PRESENTATION_POLITESSE, TEXT_PRESENTATION_RAISON, TEXT_PRESENTATION_TECHNIQUE } from "../../constants/textConstants";

const PageAcceuil = () => (
    <div className="container bg-light p-2">
        <h1>{NAME_ACCUEIL}</h1>
        <div className="bg-info border border-dark">
            <h4>{TEXT_PRESENTATION_POLITESSE}</h4>
            <p>{TEXT_PRESENTATION_RAISON}</p>
            <p>{TEXT_PRESENTATION_TECHNIQUE}</p>
        </div>
    </div>
);

export default PageAcceuil;