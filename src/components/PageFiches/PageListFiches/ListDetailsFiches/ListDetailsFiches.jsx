import React from "react";

const ListeDetailsFiches = ({ id, prix, nomClient, modeleVoiture, nomMarque, deleteMethod, modifyFunc }) => (
    <tr>
        <td>{id}</td>
        <td>{prix}</td>
        <td>{nomClient}</td>
        <td>{modeleVoiture}</td>
        <td>{nomMarque}</td>
        <td><button className="btn btn-success" onClick={modifyFunc}>Modifier</button></td>
        <td><button className="btn btn-danger" onClick={deleteMethod}>Supprimer</button></td>
    </tr>
);

export default ListeDetailsFiches;