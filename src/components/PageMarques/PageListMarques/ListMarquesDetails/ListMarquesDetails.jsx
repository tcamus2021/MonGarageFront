import React from "react";
import { TEXT_MARQUES_LIST_MODIFICATION } from "../../../../constants/textConstants";

const ListMarquesDetails = ({ sigle, nom }) => (
    <tr>
        <td>{sigle}</td>
        <td>{nom}</td>
        <td>{TEXT_MARQUES_LIST_MODIFICATION}</td>
    </tr>
);

export default ListMarquesDetails;