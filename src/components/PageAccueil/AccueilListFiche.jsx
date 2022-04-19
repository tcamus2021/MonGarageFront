import React from "react";

const AccueilListFiche = ({listFiche}) => (
    <table class="table table-success table-striped">
        <thead>
            <th>Client</th>
            <th>Voiture</th>
            <th>Prix</th>
        </thead>
        <tbody>
            {listFiche.map(fiche => <tr>
                <td>{fiche.Client.Nom}</td>
                <td>{fiche.Voiture.Marque.NomComplet + fiche.Voiture.Model}</td>
                <td>{fiche.Prix}</td>
            </tr>)}
        </tbody>
    </table>
)


export default AccueilListFiche;