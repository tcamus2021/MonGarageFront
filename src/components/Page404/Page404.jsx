import React from "react";
import { ERREUR_404 } from "../../constants/textConstants";

const Page404 = () => (
    <div className="container bg-danger border-bottom border-start border-end border-dark">
        <h1>{ERREUR_404}</h1>
    </div>
);

export default Page404;