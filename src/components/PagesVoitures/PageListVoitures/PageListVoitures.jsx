import React, { Component } from "react";
import { TEXT_AJOUT, TEXT_ERREUR_GENERIQUE, TEXT_VOITURES_LIST_ID, TEXT_VOITURES_LIST_MARQUE, TEXT_VOITURES_LIST_MODELE, TEXT_VOITURES_LIST_MODIFIER, TEXT_VOITURES_LIST_SUPPRIMER, TEXT_VOITURES_LIST_TITLE } from "../../../constants/textConstants";
import { URL_BASE, URL_HTTP, URL_VOITURES_MODIFY, URL_VOITURES_NEW } from "../../../constants/urlConstant";
import { updateVoiture } from "../../../utils/getterVoitures";
import { redirectToModify } from "../../../utils/redirect";
import ButtonCreate from "../../Buttons/ButtonCreate";
import Loader from "../../Loader/Loader";
import ListeVoituresDetails from "./ListVoituresDetails/ListVoituresDetails";

class PageListVoitures extends Component {
    constructor() {
        super();
        this.state = { listeVoiture: [], affichageVoitures: [], isLoading: true, error: false };
    }

    componentDidMount() {
        this.getAll();
    }

    getAll(){
        this.props.promesseVoitures()
        .then(res => {
            this.setState({ listeVoiture: res });
            const tmpAffichageFinal = [];
            res.map((voiture) => {
                tmpAffichageFinal.push(<ListeVoituresDetails
                    id={voiture.IdVoiture}
                    modele={voiture.Model}
                    marque={voiture.Marque.NomComplet}
                    deleteFunc={() => this.submitDelete(voiture.IdVoiture)}
                />);
            });
            this.setState({  affichageVoitures: tmpAffichageFinal, isLoading: false });
        })
        .catch(() => this.setState({  error: true, isLoading: false }));
    }

    async submitDelete(id){
        this.props.promesseSuppressionVoiture(id)
        .then(() => { 
            this.setState({message: 'Suppression réussie', listeFiches: []});
            this.getAll();
        })
        .catch(() => this.setState({error: true}))
    }

    render() {
        const { affichageVoitures, isLoading, error } = this.state
        return(
    <div className="container">
    {error && <p className="text-danger">{TEXT_ERREUR_GENERIQUE}</p>}
        <h1>{TEXT_VOITURES_LIST_TITLE}</h1>
        <table className="table table-info table-striped">
            <thead>
                <th>{TEXT_VOITURES_LIST_ID}</th>
                <th>{TEXT_VOITURES_LIST_MARQUE}</th>
                <th>{TEXT_VOITURES_LIST_MODELE}</th>
                <th>{TEXT_VOITURES_LIST_SUPPRIMER}</th>
            </thead>
            <tbody>{affichageVoitures}</tbody>
            </table>
        {isLoading && <Loader/>}
        <ButtonCreate link={URL_HTTP + URL_BASE + URL_VOITURES_NEW} text={TEXT_AJOUT} />
    </div>)
    }
}

export default PageListVoitures;