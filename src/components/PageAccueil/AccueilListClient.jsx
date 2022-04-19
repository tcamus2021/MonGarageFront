import React from "react";

const AccueilListClient = ({listClient}) => (
    <table class="table table-success table-striped">
        <thead>
            <th>Nom</th>
            <th>Numero</th>
        </thead>
        <tbody>
            {listClient.map(client => <tr>
                <td>{client.Nom}</td>
                <td>{client.Numero}</td>
            </tr>)}
        </tbody>
    </table>
)


export default AccueilListClient;