import { connect } from "react-redux";
import { getClients } from "../../utils/getterClients";
import { getFiches } from "../../utils/getterFiches";
import { getVoitures } from "../../utils/getterVoitures";
import PageAcceuil from "./PageAccueil";

const mapStateToProps = () => ({
    promesseListClient: getClients,
    promesseListVoitures: getVoitures,
    promesseListFiches: getFiches,
});

export default connect(mapStateToProps)(PageAcceuil);