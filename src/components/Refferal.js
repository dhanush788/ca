import React, {useContext, useState} from 'react';
import {ref, onValue} from "firebase/database";
import {Collapse} from "@mui/material";
import {db} from "../functions/auth/firebase";
import {UserContext} from "../functions/auth/userContext";

export default function Referral() {
    const [visible, setVisible] = useState(false)
    const [referral, setReferral] = useState(false)
    const {user,} = useContext(UserContext)



    return (
        <>
            <div style={{top: "90%", left: 0, position:"absolute"}}>
                <div className="flex items-stretch">
                    <button
                        onClick={() => setVisible(!visible)}
                        style={{
                            backgroundColor: "white",
                            border:"none",
                            padding:"5px",
                        }}
                    >
                        Referral›
                    </button>
                    <Collapse orientation="horizontal" in={visible}>
                        <div className="flex items-center px-2" style={{backgroundColor: "#00000000", color:"white",border:"1px white solid", height:"100%"}}>{user?.referral}</div>
                    </Collapse>
                </div>
            </div>

        </>
    )
}

