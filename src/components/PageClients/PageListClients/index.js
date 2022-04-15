import { connect } from "react-redux";
import {deleteClient, getClients} from "../../../utils/getterClients";
import PageListClients from "./PageListClients";

const mapStateToProps = () => ({
    promesseClients: getClients,
    promesseSupressionClient: deleteClient
});

export default connect(mapStateToProps)(PageListClients);