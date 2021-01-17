import React from "react"
import "./index.css";
import Layout from './../../shared/Layout/index';
import Competition from "./components/Competition";
import { IoIosArrowDown } from 'react-icons/io';
import Marathon from "./components/Marathon";
import OnDayEvent from "./components/OnDayEvent";
import Session from "./components/Session";



function Events() {

    return (
        <div className="page-component " >
            <Layout>
                <div className="page_container  ">
                        <h1 id="dropE">Events</h1>
                    <div className="dropdown">
                        <button className="dropbtn"><h1> <IoIosArrowDown/></h1></button>
                        <div className="dropdown_content">
                            <div className="value_dropDown" >Session</div>
                            <div className="value_dropDown" >Marathon</div>
                            <div className="value_dropDown" >OnDayEvent</div>
                            <div className="value_dropDown" >Competition</div>
                        </div>
                    </div>
                </div>
    
            </Layout>
        </div>
    )
}
export default Events;


{/* <Competition/>
<Marathon/>
<OnDayEvent/>
<Session/> */}