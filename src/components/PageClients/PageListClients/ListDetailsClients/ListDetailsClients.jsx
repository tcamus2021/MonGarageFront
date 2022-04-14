import React from "react";

const ListeDetailsClients = ({ id, nom, numero }) => (
    <tr>
        <td>{id}</td>
        <td>{nom}</td>
        <td>{numero}</td>
        <td>Update</td>
        <td>Delete</td>
    </tr>
);

export default ListeDetailsClients;