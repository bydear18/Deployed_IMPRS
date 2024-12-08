import './headbody.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Account from './AccountTab/Account';
import Hometab from './HomeTab/HomeTab';
import Wildcat from './Wildcat.png';
import Dashboard from './Dashboard/HeadDashboard';
import RequestHistory from './RequestHistory/History';
import SystemReport from './Reports/Reports';
import PendingRequests from './PendingRequests/Pending';

function HeadBody() {
    const navigate = useNavigate();
    const [toggleState, setToggleState] = useState(1);
    const role = localStorage.getItem("role");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    useEffect(() => {
        // Ensure the user is logged in and has the "head" role

        if(role === "head"){
            navigate("/head");
        } else if(role === "admin"){
            navigate("/admin");
        } else if(role === "staff"){
            navigate("/staff");
        } else{
            navigate("/home");
        }
        
    }, [navigate, isLoggedIn, role]); // Dependencies to re-run this effect on changes

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div id="whole">
            <div id="layer">
                <div id="container">
                    <div
                        className={toggleState === 1 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(1)}
                    >
                        Home
                    </div>
                    <div
                        className={toggleState === 2 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(2)}
                    >
                        Dashboard
                    </div>
                    <div
                        className={toggleState === 3 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(3)}
                    >
                        Pending Request
                    </div>
                    <div
                        className={toggleState === 4 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(4)}
                    >
                        Request History
                    </div>
                    <div
                        className={toggleState === 5 ? "tab active-tab" : "tab"}
                        onClick={() => toggleTab(5)}
                    >
                        System Report
                    </div>
                </div>

                <div
                    className={toggleState === 1 ? "content active-content" : "content"}
                    onClick={() => toggleTab(1)}
                >
                    <Hometab />
                </div>

                <div
                    className={toggleState === 2 ? "content active-content" : "content"}
                    onClick={() => toggleTab(2)}
                >
                    <Dashboard />
                </div>

                <div
                    className={toggleState === 3 ? "content active-content" : "content"}
                    onClick={() => toggleTab(3)}
                >
                    <PendingRequests />
                </div>

                <div
                    className={toggleState === 4 ? "content active-content" : "content"}
                    onClick={() => toggleTab(4)}
                >
                    <RequestHistory />
                </div>

                <div
                    className={toggleState === 5 ? "content active-content" : "content"}
                    onClick={() => toggleTab(5)}
                >
                    <SystemReport />
                </div>

                <img src={Wildcat} alt="Wildcat logo" />
            </div>
        </div>
    );
}

export default HeadBody;
