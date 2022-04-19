import React from "react";

const AccueilListVoiture = ({listVoiture}) => (
    <table class="table table-success table-striped">
        <thead>
            <th>Modèle</th>
            <th>Marque</th>
        </thead>
        <tbody>
            {listVoiture.map(voiture => <tr><td>{voiture.Model}</td><td>{voiture.Marque.NomComplet}</td></tr>)}
        </tbody>
    </table>
)


export default AccueilListVoiture;