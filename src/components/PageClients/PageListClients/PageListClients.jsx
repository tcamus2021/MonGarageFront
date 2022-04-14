import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE, 
    TEXT_VOITURES_LIST_ID, 
    TEXT_VOITURES_LIST_MARQUE,
    TEXT_VOITURES_LIST_MODELE, 
    TEXT_VOITURES_LIST_MODIFIER, 
    TEXT_VOITURES_LIST_SUPPRIMER, 
    TEXT_CLIENTS_LIST_TITLE, 
    TEXT_CLIENTS_LIST_NOM,
    TEXT_CLIENTS_LIST_ID,
    TEXT_CLIENTS_LIST_NUMERO} from "../../../constants/textConstants";
import Loader from "../../Loader/Loader";
import ListeDetailsClients from "./ListDetailsClients/ListDetailsClients";

class PageListClients extends Component {
    constructor() {
        super();
        this.state = { listeClients: [], affichageClients: [], isLoading: true, error: false };
    }

    componentDidMount() {
        this.props.promesseClients
        .then(res => {
            this.setState({ listeClients: res });
            const tmpAffichageFinal = [];
            res.map((client) => {
                tmpAffichageFinal.push(<ListeDetailsClients
                    id={client.IdClient}
                    nom={client.Nom}
                    numero={client.Numero}
                />);
            });
            this.setState({  affichageClients: tmpAffichageFinal, isLoading: false });
        })
        .catch(() => this.setState({ isLoading: false, error: true}));
    }

    render() {
        const { affichageClients, isLoading, error } = this.state
        return(
    <div className="container">
    {error && <p className="text-danger">{TEXT_ERREUR_GENERIQUE}</p>}
        <h1>{TEXT_CLIENTS_LIST_TITLE}</h1>
        <table class="table table-info table-striped">
            <thead>
                <th>{TEXT_CLIENTS_LIST_ID}</th>
                <th>{TEXT_CLIENTS_LIST_NOM}</th>
                <th>{TEXT_CLIENTS_LIST_NUMERO}</th>
                <th>{TEXT_VOITURES_LIST_MODIFIER}</th>
                <th>{TEXT_VOITURES_LIST_SUPPRIMER}</th>
            </thead>
            <tbody>{affichageClients}</tbody>
            </table>
        {isLoading && <Loader/>}
    </div>)
    }
}

export default PageListClients;