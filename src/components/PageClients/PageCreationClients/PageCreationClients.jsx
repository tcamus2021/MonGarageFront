import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE } from "../../../constants/textConstants";
import { URL_BASE, URL_CLIENTS_LIST, URL_HTTP, URL_MARQUES_LIST } from "../../../constants/urlConstant";
import ButtonSubmitCreate from "../../Buttons/ButtonSubmitCreate";

export default class PageCreationClients extends Component {
    constructor(){
        super();
        this.state = { 
            isLoading: false, 
            error: '', 
            success: '', 
            nom:''
        };
    }

    submitMethod = async () => {
        this.setState({ error: false });
        if(this.state.nom !== ''){
            this.setState({ isLoading: true });
            const nomForBack = this.state.nom;
            await this.props.promesseSendClient(nomForBack)
            .then(() => {
                this.setState({ success: 'Marque ajouté, vous allez être redirigé'});
                setTimeout(() => {document.location.href = URL_HTTP + URL_BASE + URL_CLIENTS_LIST}, 3000);
            })
            .catch(() => this.setState({ isLoading: false, error: TEXT_ERREUR_GENERIQUE}));
        } else {
            this.setState({error: 'Champs incorrects'});
        }
    } 

    updateNom = (e) => this.setState({nom: e.target.value, nomClassName: 'm-2 form-control', error: false});

    render(){
        const nomOk = this.state.nom !== '';
        const nomClassName  = nomOk ? 'm-2 form-control is-valid' : 'm-2 form-control is-invalid';
        return (
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex col-12 justify-content-center">
                    <div className="border border-dark d-flex col-4 m-2 justify-content-center p-2">
                        <label for='input-nom' className="m-2">Nom</label>
                        <input type="text" id='input-nom' onChange={this.updateNom} className={nomClassName}/>
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