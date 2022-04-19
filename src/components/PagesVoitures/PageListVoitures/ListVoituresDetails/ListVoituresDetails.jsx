import React from "react";

const ListeVoituresDetails = ({ id, modele, marque, deleteFunc, modifyFunc }) => (
    <tr>
        <td>{id}</td>
        <td>{marque}</td>
        <td>{modele}</td>
        <td><button className="btn btn-success" onClick={modifyFunc}>Modifier</button></td>
        <td><button className="btn btn-danger" onClick={deleteFunc}>Supprimer</button></td>
    </tr>
);

export default ListeVoituresDetails;