import React from "react";

const ListeVoituresDetails = ({ id, modele, marque }) => (
    <tr>
        <td>{id}</td>
        <td>{marque}</td>
        <td>{modele}</td>
        <td>Update</td>
        <td>Delete</td>
    </tr>
);

export default ListeVoituresDetails;