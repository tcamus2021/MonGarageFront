import React from "react";

const ListeDetailsFiches = ({ id, prix, nomClient, modeleVoiture, nomMarque }) => (
    <tr>
        <td>{id}</td>
        <td>{prix}</td>
        <td>{nomClient}</td>
        <td>{modeleVoiture}</td>
        <td>{nomMarque}</td>
        <td>Update</td>
        <td>Delete</td>
    </tr>
);

export default ListeDetailsFiches;