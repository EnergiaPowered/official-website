import React from "react";
import SingleWorkshop from "../SingleWorkshop";
import serviceFile from "../../service/workshops.service.json"

function WorkshopsComponent() {
    return (
        <div style={{padding:"5em"}}>
            {serviceFile["Workshops"].map((workshop, index) => <SingleWorkshop workshop={workshop} key={index} />)}
        </div>
    )
}

export default WorkshopsComponent;
