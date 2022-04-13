import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE, TEXT_VOITURES_LIST_ID, TEXT_VOITURES_LIST_MARQUE, TEXT_VOITURES_LIST_MODELE, TEXT_VOITURES_LIST_MODIFIER, TEXT_VOITURES_LIST_SUPPRIMER } from "../../../constants/textConstants";
import ListeVoituresDetails from "./ListVoituresDetails/ListVoituresDetails";

class PageListVoitures extends Component {
    constructor() {
        super();
        this.state = { listeVoiture: [], affichageVoitures: [], isLoading: true, error: false };
    }

    componentDidMount() {
        try{
            this.props.promesseVoitures
            .then(res => {
                this.setState({ listeVoiture: res });
                const tmpAffichageFinal = [];
                res.map((voiture) => {
                    tmpAffichageFinal.push(<ListeVoituresDetails
                        id={voiture.IdVoiture}
                        modele={voiture.Model}
                        marque={voiture.Marque.NomComplet}
                    />);
                });
                this.setState({  affichageVoitures: tmpAffichageFinal, isLoading: false });
            });
        } catch {
            this.setState({  error: true, isLoading: false });
        }
    }

    render() {
        const { affichageVoitures, isLoading, error } = this.state
        return(
    <div className="container">
    {error && <p className="text-danger">{TEXT_ERREUR_GENERIQUE}</p>}
        <h1>Mes Voitures</h1>
        <table class="table table-info table-striped">
            <thead>
                <th>{TEXT_VOITURES_LIST_ID}</th>
                <th>{TEXT_VOITURES_LIST_MODELE}</th>
                <th>{TEXT_VOITURES_LIST_MARQUE}</th>
                <th>{TEXT_VOITURES_LIST_MODIFIER}</th>
                <th>{TEXT_VOITURES_LIST_SUPPRIMER}</th>
            </thead>
            <tbody>{affichageVoitures}</tbody>
            </table>
        {isLoading && <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>}
    </div>)
    }
}

export default PageListVoitures;