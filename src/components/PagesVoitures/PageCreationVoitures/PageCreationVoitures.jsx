import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE } from "../../../constants/textConstants";
import { URL_BASE, URL_HTTP, URL_VOITURES_LIST  } from "../../../constants/urlConstant";
import ButtonSubmitCreate from "../../Buttons/ButtonSubmitCreate";
import Loader from "../../Loader/Loader";

export default class PageCreationVoitures extends Component {
    constructor(){
        super();
        this.state = { 
            isLoading: false, 
            isLoadingMarque: true,
            marques: [],
            marque: 'null',
            error: '', 
            success: '', 
            sigle: '', 
            model:''
        };
    }

    componentDidMount(){
        this.props.promesseGetMarque()
        .then(res => this.setState({marques: res, isLoadingMarque: false}))
        .catch(() => this.setState({isLoadingMarque: false, error: true}));
    }

    submitMethod = async () => {
        this.setState({ error: false });
        const modelOk = this.state.model !== '';
        const marqueOk = this.state.marque !== 'null';
        if(marqueOk && modelOk){
            this.setState({ isLoading: true });
            const sigleMarqueForBack = this.state.marque;
            const modelForBack = this.state.model;
            await this.props.promesseSendVoiture({ sigleMarque: sigleMarqueForBack, model: modelForBack })
            .then(() => {
                this.setState({ success: 'Marque ajouté, vous allez être redirigé'});
                setTimeout(() => {document.location.href = URL_HTTP + URL_BASE + URL_VOITURES_LIST}, 3000);
            })
            .catch(() => this.setState({ isLoading: false, error: TEXT_ERREUR_GENERIQUE}));
        } else {
            this.setState({error: 'Champs incorrects'});
        }
    } 

    updateModel = (e) => this.setState({model: e.target.value, modelClassName: 'm-2 form-control', error: false});
    updateMarque = (e) => this.setState({marque: e.target.value, modelClassName: 'm-2 form-control', error: false});

    render(){
        const modelOk = this.state.model !== '';
        const marqueOk = this.state.marque !== 'null';
        const modelClassName  = modelOk ? 'm-2 form-control is-valid' : 'm-2 form-control is-invalid';
        const marqueClassName = marqueOk ? 'm-2 form-select is-valid' : 'm-2 form-select is-invalid';
        return (
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex col-12 justify-content-center">
                    <div className="border border-dark d-flex col-4 m-2 justify-content-center p-2">
                        <label for='input-marque' className="m-2">Marque</label>
                        <select className={marqueClassName} id='input-marque' onChange={this.updateMarque}>
                            <option selected value={'null'}>{!this.state.error ? 'Choisissez votre marque...' : 'Erreur'}</option>
                            {!this.state.isLoadingMarque && this.state.marques.map(marque =><option value={marque.Sigle}>{marque.NomComplet}</option>)}
                        </select>
                    </div>
                </div>
                    <div className="d-flex col-12 justify-content-center">
                    <div className="border border-dark d-flex col-4 m-2 justify-content-center p-2">
                        <label for='input-modele' className="m-2">Modèle</label>
                        <input type="text" id='input-modele' onChange={this.updateModel} className={modelClassName}/>
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