import React, { Component } from "react";
import { TEXT_ERREUR_GENERIQUE, TEXT_MARQUES_LIST_NOM, TEXT_MARQUES_LIST_SIGLE, TEXT_MARQUES_LIST_TITLE, TEXT_MARQUES_LIST_MODIFICATION } from "../../../constants/textConstants";
import ListMarquesDetails from "./ListMarquesDetails/ListMarquesDetails";

class PageListMarques extends Component {
    constructor(){
        super();
        this.state = { listeMarques: [], affichageMarques: [], isLoading: true, error: false };
    }

    componentDidMount(){
        try{
            this.props.promesseMarques
            .then(res => {
                this.setState({listeMarques: res});
                const tmpAffichageFinal = [];
                res.map(marque => {
                    tmpAffichageFinal.push(<ListMarquesDetails
                        sigle={marque.Sigle}
                        nom={marque.NomComplet}    
                    />);
                });
                this.setState({ affichageMarques: tmpAffichageFinal, isLoading: false});
            });
        } catch {
            this.setState({ error: true, isLoading: false});
        }
        
    }   
    
    render(){
        const { affichageMarques, isLoading, error } = this.state
        return(
        <div className="container">
        {error && <p className="text-danger">{TEXT_ERREUR_GENERIQUE}</p>}
        <h1>{TEXT_MARQUES_LIST_TITLE}</h1>
        <table class="table table-info table-striped">
            <thead>
                <th>{TEXT_MARQUES_LIST_SIGLE}</th>
                <th>{TEXT_MARQUES_LIST_NOM}</th>
                <th>{TEXT_MARQUES_LIST_MODIFICATION}</th>
            </thead>
            <tbody>{affichageMarques}</tbody>
            </table>
        {isLoading && <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>}
    </div>)
    }
}

export default PageListMarques;