import { connect } from "react-redux";
import { getMarques } from "../../../utils/getterMarques";
import PageListMarques from "./PageListMarques";

const mapStateToProps = () => ({
    promesseMarques: getMarques()
});

export default connect(mapStateToProps)(PageListMarques);