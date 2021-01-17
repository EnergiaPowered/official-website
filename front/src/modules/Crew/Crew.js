import React, { useState,useEffect } from "react";
import WebDevelopment from "./components/WebDevelopment";
import ArduinoEmbeddedSystems from "./components/ArduinoEmbeddedSystems";
import CPlathPlath from "./components/CPlathPlath";
import DecorationCoordinationReception from "./components/DecorationCoordinationReception";
import Design from "./components/Design";
import DigitalElectronics from "./components/DigitalElectronics";
import HumanResources from "./components/HumanResources";
import Logistics from "./components/Logistics";
import Management from "./components/Management";
import Marketing from "./components/Marketing";
import Media from "./components/Media";
import MobileAppDevelopment from "./components/MobileAppDevelopment";
import PublicRelations from "./components/PublicRelations";
import QualityManager from "./components/QualityManager";
import "./index.css";
import Layout from '../../shared/Layout/index';
import { IoIosArrowDown } from 'react-icons/io';





function Events() {


    const [switchPage] = useState([<WebDevelopment/>,<ArduinoEmbeddedSystems/>,<CPlathPlath/>,<DecorationCoordinationReception/>,
    <Design/>,<DigitalElectronics/>,<HumanResources/>,<Logistics/>,<Management/>,<Marketing/>,<Media/>,<MobileAppDevelopment/>,
        <PublicRelations/>,<QualityManager/> ]);
    const [handelPage, setHandelPage] = useState();






    return (
        <div className="page-component " >
            <Layout>
      
                <div className="page_container  ">
                        <h1 id="dropE">CREW</h1>
                      
                    <div className="dropdown">
                        <button className="dropbtn"><h1> <IoIosArrowDown/></h1></button>
                        <div className="dropdown_content">
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[0])}>WEB DEVELOPMENT</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[11])}>MOBILE APP DEVELOPMENT</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[4])}>DESIGN</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[10])}>MEDIA</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[2])}>C++</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[13])}>QUALITY MANGER</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[12])}>PUBLIC RELATIONS</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[3])}>DECORATION COORDINATION &amp; RECEPTION</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[9])}>MARKETING</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[8])}>MANAGEMENT</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[6])}>HUMAN RESOURCES</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[1])}>ARDUINO &amp; EMBEDDED SYSTEMS</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[7])}>LOGISTICS</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[5])}>DIGITAL ELECTRONICS</div> 
                        </div>
                    </div>
                </div>
               <div> {handelPage} </div>
            </Layout>
        </div>
    )
}
export default Events;
