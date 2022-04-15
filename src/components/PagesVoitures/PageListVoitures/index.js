import { connect } from "react-redux";
import PageListVoitures from "./PageListVoitures";
import { getVoitures } from "../../../utils/getterVoitures";

const mapStateToProps = () => ({
    promesseVoitures: getVoitures()
});

export default connect(mapStateToProps)(PageListVoitures);