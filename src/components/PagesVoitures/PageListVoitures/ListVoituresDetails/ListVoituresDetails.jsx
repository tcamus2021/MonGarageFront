import React from "react";

const ListeVoituresDetails = ({ id, modele, marque, deleteFunc }) => (
    <tr>
        <td>{id}</td>
        <td>{marque}</td>
        <td>{modele}</td>
        <td>Update</td>
        <td><button className="btn btn-danger" onClick={deleteFunc}>Supprimer</button></td>
    </tr>
);

export default ListeVoituresDetails;