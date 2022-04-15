import React from "react";

const ListeDetailsFiches = ({ id, prix, nomClient, modeleVoiture, nomMarque, deleteMethod }) => (
    <tr>
        <td>{id}</td>
        <td>{prix}</td>
        <td>{nomClient}</td>
        <td>{modeleVoiture}</td>
        <td>{nomMarque}</td>
        <td>Update</td>
        <td><button className="btn btn-danger" onClick={deleteMethod}>Supprimer</button></td>
    </tr>
);

export default ListeDetailsFiches;