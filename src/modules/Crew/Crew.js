import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from '../../shared/Layout/index';
import CommitteeMembers from "./components/CommitteeMembers";
import { getCrew } from "./services/crew.services";
import { IoIosArrowDown } from 'react-icons/io';
import "./index.css";

function Crew() {
    const [switchPage] = useState([
        "High Board",
        "Arduino & Embedded Systems",
        "C++",
        "DCR",
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
        "Web Development"
    ]);
    const [handelPage, setHandelPage] = useState(null);

    useEffect(() => viewCrew("High Board"), []);

    const viewCrew = committee => {
        const params = `committee=${committee.replace('&', '%26').replace(/\+/g, '%2b')}`;
        getCrew(params).then((res) => {
            if (committee !== "Structure") {
                let members = res.data.filter(member => member.committee === committee);
                let heads;
                let viceHead = null;
                if (committee === "High Board") {
                    heads = members.filter(member => member.position === "President");
                    viceHead = members.filter(member => member.position === "General Vice President")[0];
                    members = members
                        .filter(member => member.position !== "President" && member.position !== "General Vice President")
                        .sort((a, b) => {
                            if (a.name < b.name) {
                                return -1;
                            }
                            if (a.name > b.name) {
                                return 1;
                            }
                            return 0;
                        });
                } else {
                    heads = members.filter(member => member.position === "Head");
                    viceHead = members.filter(member => member.position === "Vice Head")[0];
                    members = members
                        .filter(member => member.position === "Member")
                        .sort((a, b) => {
                            if (a.name < b.name) {
                                return -1;
                            }
                            if (a.name > b.name) {
                                return 1;
                            }
                            return 0;
                        });
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
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[0])}>HIGH BOARD</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[1])}>ARDUINO &amp; EMBEDDED SYSTEMS</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[2])}>C++</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[3])}>DECORATION COORDINATION &amp; RECEPTION</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[4])}>DESIGN</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[5])}>DIGITAL ELECTRONICS</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[6])}>FUNDRAISING</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[7])}>HUMAN RESOURCES</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[8])}>LOGISTICS</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[9])}>MANAGEMENT</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[10])}>MARKETING</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[11])}>MEDIA</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[12])}>MOBILE APP DEVELOPMENT</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[13])}>PUBLIC RELATIONS</div>
                            <div className="value_dropDown" onClick={() => viewCrew(switchPage[14])}>WEB DEVELOPMENT</div>
                        </div>
                    </div>
                </div>

                <div> {handelPage} </div>
            </Layout>
        </div>
    )
}
export default Crew;
