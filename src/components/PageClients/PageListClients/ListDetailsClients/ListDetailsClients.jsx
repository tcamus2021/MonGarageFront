import React from "react";

const ListeDetailsClients = ({ id, nom, numero, deleteFunc }) => (
    <tr>
        <td>{id}</td>
        <td>{nom}</td>
        <td>{numero}</td>
        <td>Update</td>
        <td><button className="btn btn-danger" onClick={deleteFunc}>Supprimer</button></td>
    </tr>
);

export default ListeDetailsClients;