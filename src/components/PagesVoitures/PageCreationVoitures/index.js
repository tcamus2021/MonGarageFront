import { connect } from "react-redux";
import { getMarques } from "../../../utils/getterMarques";
import { addVoitures } from "../../../utils/getterVoitures";
import PageCreationVoitures from "./PageCreationVoitures";

const mapStateToProps = () => ({
    promesseSendVoiture: addVoitures,
    promesseGetMarque: getMarques
});

export default connect(mapStateToProps)(PageCreationVoitures);