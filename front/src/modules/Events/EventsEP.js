import React, { useState,useEffect } from "react"
import "./index.css";
import Layout from './../../shared/Layout/index';
import { IoIosArrowDown } from 'react-icons/io';

import Competition from "./components/Competition";
import Marathon from "./components/Marathon";
import OnDayEvent from "./components/OnDayEvent";
import Session from "./components/Session";



function Events() {


    const [switchPage] = useState([<Marathon/>,<Competition/>,<OnDayEvent/>,<Session/>]);
    const [handelPage, setHandelPage] = useState(<Session/>);






    return (
        <div className="page-component " >
            <Layout>
      
                <div className="page_container  ">
                        <h1 id="dropE">Events</h1>
                      
                    <div className="dropdown">
                        <button className="dropbtn"><h1> <IoIosArrowDown/></h1></button>
                        <div className="dropdown_content">
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[3])} >Session</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[0])}>Marathon</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[2])}>OnDayEvent</div>
                            <div className="value_dropDown" onClick={() => setHandelPage(switchPage[1])}>Competition</div>
                        </div>
                    </div>
                </div>
               <div> {handelPage} </div>
            </Layout>
        </div>
    )
}
export default Events;


{/* <Competition/>
<Marathon/>
<OnDayEvent/>
<Session/> */}