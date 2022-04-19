import React from "react";
import { TEXT_MARQUES_LIST_MODIFICATION } from "../../../../constants/textConstants";

const ListMarquesDetails = ({ sigle, nom, modifyFunc }) => (
    <tr>
        <td>{sigle}</td>
        <td>{nom}</td>
        <td><button className="btn btn-success" onClick={modifyFunc}>{TEXT_MARQUES_LIST_MODIFICATION}</button></td>
    </tr>
);

export default ListMarquesDetails;