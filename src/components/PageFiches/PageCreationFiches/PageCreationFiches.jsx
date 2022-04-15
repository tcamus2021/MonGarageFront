import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE } from "../../../constants/textConstants";
import { URL_BASE, URL_FICHES_LIST, URL_HTTP  } from "../../../constants/urlConstant";
import ButtonSubmitCreate from "../../Buttons/ButtonSubmitCreate";

export default class PageCreationFiches extends Component {
    constructor(){
        super();
        this.state = { 
            isLoading: false, 
            clients: [],
            voitures: [],
            client: 'null',
            voiture: 'null',
            prix: 0,
            error: '', 
            success: '', 
            sigle: '', 
            model:''
        };
    }

    componentDidMount(){
        this.props.promesseGetClients()
        .then(res => this.setState({clients: res}))
        .catch(() => this.setState({error: true}));
        this.props.promesseGetVoitures()
        .then(res => this.setState({voitures: res}))
        .catch(() => this.setState({error: true}));
    }

    submitMethod = async () => {
        this.setState({ error: false });
        const clientOk = this.state.client !== 'null';
        const voitureOk = this.state.voiture !== 'null';
        const prixOk = this.state.prix > 0 && this.state.prix !== null;
        if(clientOk && voitureOk && prixOk){
            this.setState({ isLoading: true });
            const clientForBack = this.state.client;
            const voitureForBack = this.state.voiture;
            const prixForBack = this.state.prix;
            await this.props.promesseSendFiche({ clientId: clientForBack, voitureId: voitureForBack, prix: prixForBack })
            .then(() => {
                this.setState({ success: 'Fiche ajouté, vous allez être redirigé'});
                setTimeout(() => {document.location.href = URL_HTTP + URL_BASE + URL_FICHES_LIST}, 3000);
            })
            .catch(() => this.setState({ isLoading: false, error: TEXT_ERREUR_GENERIQUE}));
        } else {
            this.setState({error: 'Champs incorrects'});
        }
    } 

    updateClient = (e) => this.setState({client: e.target.value, clientClassName: 'm-2 form-control', error: false});
    updateVoiture = (e) => this.setState({voiture: e.target.value, voitureClassName: 'm-2 form-control', error: false});
    updatePrix = (e) => this.setState({prix: e.target.value, prixClassName: 'm-2 form-control', error: false});

    render(){
        const clientOk = this.state.client !== 'null';
        const voitureOk = this.state.voiture !== 'null';
        const prixOk = this.state.prix > 0 && this.state.prix !== null;
        const clientClassName  = clientOk ? 'm-2 form-control is-valid' : 'm-2 form-control is-invalid';
        const voitureClassName = voitureOk ? 'm-2 form-select is-valid' : 'm-2 form-select is-invalid';
        const prixClassName  = prixOk ? 'm-2 form-control is-valid' : 'm-2 form-control is-invalid';
        return (
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex col-12 justify-content-center">
                    <div className="border border-dark d-flex col-4 m-2 justify-content-center p-2">
                        <label for='input-marque' className="m-2">Client</label>
                        <select className={clientClassName} id='input-marque' onChange={this.updateClient}>
                            <option selected value={'null'}>{!this.state.error ? 'Choisissez votre marque...' : 'Erreur'}</option>
                            {this.state.clients.map(client =><option value={client.IdClient}>{client.Nom}</option>)}
                        </select>
                    </div>
                </div>
                <div className="d-flex col-12 justify-content-center">
                    <div className="border border-dark d-flex col-4 m-2 justify-content-center p-2">
                        <label for='input-marque' className="m-2">Voiture</label>
                        <select className={voitureClassName} id='input-marque' onChange={this.updateVoiture}>
                            <option selected value={'null'}>{!this.state.error ? 'Choisissez votre marque...' : 'Erreur'}</option>
                            {this.state.voitures.map(voiture =><option value={voiture.IdVoiture}>{voiture.Marque.NomComplet + ' ' + voiture.Model}</option>)}
                        </select>
                    </div>
                </div>
                <div className="d-flex col-12 justify-content-center">
                    <div className="border border-dark d-flex col-4 m-2 justify-content-center p-2">
                        <label for='input-modele' className="m-2">Prix</label>
                        <input type="number" id='input-modele' step='1' min='0' onChange={this.updatePrix} className={prixClassName}/>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h5 className="bg-success col-4">{this.state.success !== '' && this.state.success}</h5>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h5 className="bg-danger">{this.state.error !== '' && this.state.error}</h5>
                </div>
                <ButtonSubmitCreate isLoading={this.state.isLoading} submitMethod={this.submitMethod} />
            </div>
        )
    }
};