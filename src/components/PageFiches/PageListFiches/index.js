import { connect } from "react-redux";
import { deleteFiche, getFiches } from "../../../utils/getterFiches";
import PageListFiches from "./PageListFiches";

const mapStateToProps = () => ({
    promesseFiches: getFiches,
    promesseSupressionFiche: deleteFiche
});

export default connect(mapStateToProps)(PageListFiches);