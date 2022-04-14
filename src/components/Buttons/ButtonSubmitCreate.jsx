import React from "react";
import Loader from "../Loader/Loader";

const ButtonSubmitCreate = ({ isLoading, submitMethod }) => (
    <button type="button" className="btn btn-primary" onClick={submitMethod} disabled={isLoading}>
        {isLoading ? <Loader/> : 'Créer'}
    </button>
);

export default ButtonSubmitCreate;