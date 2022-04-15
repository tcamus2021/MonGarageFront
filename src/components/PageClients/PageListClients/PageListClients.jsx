import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE, 
    TEXT_VOITURES_LIST_MODIFIER, 
    TEXT_VOITURES_LIST_SUPPRIMER, 
    TEXT_CLIENTS_LIST_TITLE, 
    TEXT_CLIENTS_LIST_NOM,
    TEXT_CLIENTS_LIST_ID,
    TEXT_CLIENTS_LIST_NUMERO,
    TEXT_AJOUT} from "../../../constants/textConstants";
import { URL_BASE, URL_CLIENT_NEW, URL_HTTP } from "../../../constants/urlConstant";
import ButtonCreate from "../../Buttons/ButtonCreate";
import Loader from "../../Loader/Loader";
import ListeDetailsClients from "./ListDetailsClients/ListDetailsClients";

class PageListClients extends Component {
    constructor() {
        super();
        this.state = { listeClients: [], affichageClients: [], isLoading: true, error: false, message: '' };
    }

    componentDidMount() {
        this.getAll();
    }

    getAll(){
        this.props.promesseClients()
        .then(res => {
            this.setState({ listeClients: res });
            const tmpAffichageFinal = [];
            res.map((client) => {
                tmpAffichageFinal.push(<ListeDetailsClients
                    id={client.IdClient}
                    nom={client.Nom}
                    numero={client.Numero}
                    deleteFunc={() => this.submitDelete(client.IdClient)}
                />);
            });
            this.setState({  affichageClients: tmpAffichageFinal, isLoading: false });
        })
        .catch(() => this.setState({ isLoading: false, error: true}));
    }

    async submitDelete(id){
        this.props.promesseSupressionClient(id)
        .then(() => { 
            this.setState({message: 'Suppression réussie', listeClients: []});
            this.getAll();
        })
        .catch(() => this.setState({error: true}))
    }

    render() {
        const { affichageClients, isLoading, error, message } = this.state
        return(
            <div className="container">
            {error && <p className="text-danger">{TEXT_ERREUR_GENERIQUE}</p>}
            {message !== '' && <p className="text-success">{message}</p>}
                <h1>{TEXT_CLIENTS_LIST_TITLE}</h1>
                <table className="table table-info table-striped">
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
                <ButtonCreate link={URL_HTTP + URL_BASE + URL_CLIENT_NEW} text={TEXT_AJOUT} />
            </div>)
    }
}

export default PageListClients;