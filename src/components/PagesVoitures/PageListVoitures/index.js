import { connect } from "react-redux";
import PageListVoitures from "./PageListVoitures";
import { deleteVoiture, getVoitures } from "../../../utils/getterVoitures";

const mapStateToProps = () => ({
    promesseVoitures: getVoitures,
    promesseSuppressionVoiture: deleteVoiture
});

export default connect(mapStateToProps)(PageListVoitures);