import React from "react";
import "./index.css";

const SingleWorkshop = ({ workshop }) => {

    return (
        <div className="container_card row" >
            <div className="img_card" >
                <img alt="workshop" src={"https://eop-cfi.esa.int/images/workshop.jpeg"} className="rounded-circle" />
            </div>

            <div className="details_card">
                <div className="title_workshop">
                    <h3>{`${workshop.name.toUpperCase()} WORKSHOP`}</h3>
                </div>
                <div style={{margin:"2em"}}>
                    <h5>Description</h5>
                    <p style={{textAlign: "justify"}}>{workshop.description}</p>
                    <h5>Content</h5>
                    <ol>
                    {workshop.content.map((item,index)=>{
                        if(Array.isArray(item)) 
                            return(<ul key={index}>
                            {item.map((point,index)=>(<li key={index}>{point}</li>))}
                        </ul>);
                        else
                            return(<li key={index}>{item}</li>)
                    })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default SingleWorkshop;
