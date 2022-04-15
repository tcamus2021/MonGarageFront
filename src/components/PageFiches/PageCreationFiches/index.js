import { connect } from "react-redux";
import { getClients } from "../../../utils/getterClients";
import { addFiches } from "../../../utils/getterFiches";
import { getVoitures } from "../../../utils/getterVoitures";
import PageCreationFiches from "./PageCreationFiches";

const mapStateToProps = () => ({
    promesseSendFiche: addFiches,
    promesseGetClients: getClients,
    promesseGetVoitures: getVoitures
});

export default connect(mapStateToProps)(PageCreationFiches);