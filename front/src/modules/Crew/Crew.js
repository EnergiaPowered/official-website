import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from '../../shared/Layout/index';
import CommitteeMembers from "./components/CommitteeMembers";
import { getCrew } from "./services/crew.services";
import { IoIosArrowDown } from 'react-icons/io';
import BackGroundImg from "assets/Structure.png";
import "./index.css";

function Events() {
    const [switchPage] = useState([
        "Structure",
        "High Board",
        "Arduino & Embedded Systems",
        "C++",
        "Decoration Coordination & Reception",
        "Design",
        "Digital Electronics",
        "Fundraising",
        "Human Resources",
        "Logistics",
        "Management",
        "Marketing",
        "Media",
        "Mobile App Development",
        "Public Relations",
        "Quality Manager",
        "Web Development"
    ]);
    const [handelPage, setHandelPage] = useState(<img id="back_ground_img" src={BackGroundImg} alt="Smiley face" />);

    const viewCrew = committee => {
        getCrew().then((res) => {
            if (committee !== "Structure") {
                let members = res.data.filter(member => member.committee === committee);
                let heads;
                let viceHead = null;
                if (committee === "High Board") {
                    heads = members.filter(member => member.position === "President");
                    viceHead = members.filter(member => member.position === "General Vice President")[0];
                    members = members.filter(member => member.position !== "President" && member.position !== "General Vice President");
                } else {
                    heads = members.filter(member => member.position === "Head");
                    viceHead = members.filter(member => member.position === "Vice Head")[0];
                    members = members.filter(member => member.position === "member");
                }
                setHandelPage(<CommitteeMembers members={members} heads={heads} viceHead={viceHead} committeeName={committee} />);
            }
        });
    }

    return (
        <div className="page-component">
            <Helmet>
                <title>Energia Powered | Crew</title>
            </Helmet>
            <Layout>
                <div className="page_container">
                    <h1 id="dropE">CREW</h1>

                    <div className="dropdown">
                        <button className="dropbtn"><h1> <IoIosArrowDown /></h1></button>
                        <div className="dropdown_content dropdown-menu-right">
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[1])}>HIGH BOARD</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[2])}>ARDUINO &amp; EMBEDDED SYSTEMS</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[3])}>C++</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[4])}>DECORATION COORDINATION &amp; RECEPTION</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[5])}>DESIGN</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[6])}>DIGITAL ELECTRONICS</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[7])}>FUNDRAISING</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[8])}>HUMAN RESOURCES</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[9])}>LOGISTICS</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[10])}>MANAGEMENT</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[11])}>MARKETING</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[12])}>MEDIA</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[13])}>MOBILE APP DEVELOPMENT</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[14])}>PUBLIC RELATIONS</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[15])}>QUALITY MANGER</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[16])}>WEB DEVELOPMENT</div>
                        </div>
                    </div>
                </div>

                <div> {handelPage} </div>
            </Layout>
        </div>
    )
}
export default Events;
