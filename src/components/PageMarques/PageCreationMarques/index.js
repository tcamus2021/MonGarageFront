import { connect } from "react-redux";
import { addMarques } from "../../../utils/getterMarques";
import PageCreationMarque from "./PageCreationMarques";

const mapStateToProps = () => ({
    promesseSendMarque: addMarques
});

export default connect(mapStateToProps)(PageCreationMarque);