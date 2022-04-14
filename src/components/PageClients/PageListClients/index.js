import { connect } from "react-redux";
import getClients from "../../../utils/getterClients";
import PageListClients from "./PageListClients";

const mapStateToProps = () => ({
    promesseClients: getClients()
});

export default connect(mapStateToProps)(PageListClients);