import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE } from "../../../constants/textConstants";
import { URL_BASE, URL_HTTP, URL_MARQUES_LIST } from "../../../constants/urlConstant";
import ButtonSubmitCreate from "../../Buttons/ButtonSubmitCreate";

export default class PageCreationMarque extends Component {
    constructor(){
        super();
        this.state = { 
            isLoading: false, 
            error: '', 
            success: '', 
            sigle: '', 
            nom:''
        };
    }

    submitMethod = async () => {
        this.setState({ error: false });
        const sigleOk = this.state.sigle !== '' && this.state.sigle.length === 2;
        const nomOk = this.state.nom !== '';
        if(sigleOk && nomOk){
            this.setState({ isLoading: true });
            const sigleForBack = this.state.sigle;
            const nomForBack = this.state.nom;
            await this.props.promesseSendMarque({sigle: sigleForBack, marque: nomForBack})
            .then(() => {
                this.setState({ success: 'Marque ajouté, vous allez être redirigé'});
                setTimeout(() => {document.location.href = URL_HTTP + URL_BASE + URL_MARQUES_LIST}, 3000);
            })
            .catch(() => this.setState({ isLoading: false, error: TEXT_ERREUR_GENERIQUE}));
        } else {
            this.setState({error: 'Champs incorrects'});
        }
    } 

    updateSigle = (e) => this.setState({sigle: e.target.value, sigleClassName: 'm-2 form-control', error: false});
    updateNom = (e) => this.setState({nom: e.target.value, nomClassName: 'm-2 form-control', error: false});

    render(){
        const sigleOk = this.state.sigle !== '' && this.state.sigle.length === 2;
        const nomOk = this.state.nom !== '';
        const sigleClassName  = sigleOk ? 'm-2 form-control is-valid' : 'm-2 form-control is-invalid';
        const nomClassName  = nomOk ? 'm-2 form-control is-valid' : 'm-2 form-control is-invalid';
        return (
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex col-12 justify-content-center">
                    <div className="border border-dark d-flex col-4 m-2 justify-content-center p-2">
                        <label for='input-sigle'className="m-2" >Sigle</label>
                        <input type="text" className={sigleClassName} id='id-sigle' onChange={this.updateSigle}/>
                    </div> 
                </div>
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