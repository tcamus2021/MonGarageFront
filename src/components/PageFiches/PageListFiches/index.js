import { connect } from "react-redux";
import { getFiches } from "../../../utils/getterFiches";
import PageListFiches from "./PageListFiches";

const mapStateToProps = () => ({
    promesseFiches: getFiches()
});

export default connect(mapStateToProps)(PageListFiches);