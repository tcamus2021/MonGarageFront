import React from "react";

const ButtonCreate = ({ link, text }) => (
    <div>
        <a href={link}>
            <button type="button" className="btn btn-primary" href={link}>
                {text}
            </button>
        </a>
    </div>
);

export default ButtonCreate;