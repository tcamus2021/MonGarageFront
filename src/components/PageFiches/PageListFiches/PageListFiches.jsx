import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE, 
    TEXT_FICHES_LIST_ID,
    TEXT_FICHES_LIST_PRIX,
    TEXT_FICHES_LIST_NOM,
    TEXT_FICHES_LIST_VOITURE_MODELE,
    TEXT_FICHES_LIST_VOITURE_MARQUE,
    TEXT_FICHES_LIST_MODIFIER,
    TEXT_FICHES_LIST_SUPPRIMER,
    TEXT_FICHES_LIST_TITLE,
    TEXT_AJOUT
} from "../../../constants/textConstants";
import { URL_BASE, URL_FICHES_NEW, URL_HTTP } from "../../../constants/urlConstant";
import ButtonCreate from "../../Buttons/ButtonCreate";
import Loader from "../../Loader/Loader";
import ListeDetailsFiches from "./ListDetailsFiches/ListDetailsFiches";

class PageListFiches extends Component {
    constructor() {
        super();
        this.state = { listeFiches: [], affichageFiches: [], isLoading: true, error: false };
    }

    componentDidMount() {
        this.props.promesseFiches
        .then(res => {
            this.setState({ listeFiches: res });
            const tmpAffichageFinal = [];
            res.map((fiche) => {
                tmpAffichageFinal.push(<ListeDetailsFiches
                    id={fiche.IdFiche}
                    prix={fiche.Prix}
                    nomClient={fiche.Client.Nom}
                    modeleVoiture={fiche.Voiture.Model}
                    nomMarque={fiche.Voiture.Marque.NomComplet}
                />);
            });
            this.setState({  affichageFiches: tmpAffichageFinal, isLoading: false });
        })
        .catch(() => this.setState({ isLoading: false, error: true}));
    }

    render() {
        const { affichageFiches, isLoading, error } = this.state
        return(
    <div className="container">
    {error && <p className="text-danger">{TEXT_ERREUR_GENERIQUE}</p>}
        <h1>{TEXT_FICHES_LIST_TITLE}</h1>
        <table className="table table-info table-striped">
            <thead>
                <th>{TEXT_FICHES_LIST_ID}</th>
                <th>{TEXT_FICHES_LIST_PRIX}</th>
                <th>{TEXT_FICHES_LIST_NOM}</th>
                <th>{TEXT_FICHES_LIST_VOITURE_MODELE}</th>
                <th>{TEXT_FICHES_LIST_VOITURE_MARQUE}</th>
                <th>{TEXT_FICHES_LIST_MODIFIER}</th>
                <th>{TEXT_FICHES_LIST_SUPPRIMER}</th>
            </thead>
            <tbody>{affichageFiches}</tbody>
            </table>
        {isLoading && <Loader/>}
        <ButtonCreate link={URL_HTTP + URL_BASE + URL_FICHES_NEW} text={TEXT_AJOUT} />
    </div>)
    }
}

export default PageListFiches;