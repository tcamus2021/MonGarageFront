import { connect } from "react-redux";
import { addClient } from "../../../utils/getterClients";
import PageCreationClients from "./PageCreationClients";

const mapStateToProps = () => ({
    promesseSendClient: addClient
});

export default connect(mapStateToProps)(PageCreationClients);