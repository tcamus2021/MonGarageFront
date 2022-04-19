import React from "react";

const ListeDetailsClients = ({ id, nom, numero, deleteFunc, modifyFunc }) => (
    <tr>
        <td>{id}</td>
        <td>{nom}</td>
        <td>{numero}</td>
        <td><button className="btn btn-success" onClick={modifyFunc}>Modifier</button></td>
        <td><button className="btn btn-danger" onClick={deleteFunc}>Supprimer</button></td>
    </tr>
);

export default ListeDetailsClients;