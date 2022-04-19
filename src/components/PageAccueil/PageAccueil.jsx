import React, { Component } from "react";
import { NAME_ACCUEIL, TEXT_PRESENTATION_POLITESSE, TEXT_PRESENTATION_RAISON, TEXT_PRESENTATION_TECHNIQUE } from "../../constants/textConstants";
import Loader from "../Loader/Loader";
import AccueilListVoiture from "./AccueilListVoiture";
import AccueilListFiche from "./AccueilListFiche";
import AccueilListClient from "./AccueilListClient";

export default class PageAcceuil extends Component {
    constructor() {
        super();
        this.state = { 
            listClient: [],
            isLoadingClient: true,
            listVoiture: [], 
            isLoadingVoiture: true,
            listFiche: [] ,
            isLoadingFiche: true
        };
    }

    componentDidMount() {
        this.props.promesseListClient()
        .then(res => this.setState({isLoadingClient: false, listClient: res}));
        this.props.promesseListVoitures()
        .then(res => this.setState({isLoadingVoiture: false, listVoiture: res}));
        this.props.promesseListFiches()
        .then(res => res.json())
        .then(res => this.setState({isLoadingFiche: false, listFiche: res}));
    }

    render() {
        return(
            <div className="container bg-light p-2">
                <h1>{NAME_ACCUEIL}</h1>
                <div className="bg-info border border-dark">
                    <h4>{TEXT_PRESENTATION_POLITESSE}</h4>
                    <p>{TEXT_PRESENTATION_RAISON}</p>
                    <p>{TEXT_PRESENTATION_TECHNIQUE}</p>
                </div>
                <div className="d-flex col-12 justify-content-center">
                    <div className="col-4 m-2">
                        {this.state.isLoadingVoiture ? <Loader/> : <AccueilListVoiture listVoiture={this.state.listVoiture} /> }
                    </div>
                    <div className="col-4 m-2">
                        {this.state.isLoadingFiche ? <Loader/> : <AccueilListFiche listFiche={this.state.listFiche} /> }
                    </div>
                    <div className="col-4 m-2">
                        {this.state.isLoadingClient ? <Loader/> : <AccueilListClient listClient={this.state.listClient} /> }
                    </div>
                </div>
            </div>
        );
    }
}