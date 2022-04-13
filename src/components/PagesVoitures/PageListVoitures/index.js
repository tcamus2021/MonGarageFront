import { connect } from "react-redux";
import getVoitures from "../../../utils/getterVoitures";
import PageListVoitures from "./PageListVoitures";

const mapStateToProps = () => ({
    promesseVoitures: getVoitures()
});

export default connect(mapStateToProps)(PageListVoitures);