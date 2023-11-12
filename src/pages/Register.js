import React, { useState, useRef } from "react";
import { auth, db } from "../functions/auth/firebase";
import { ref, set, push } from "firebase/database";
import { storage } from "../functions/auth/firebase";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { notRegistered } from "../functions/auth/signIn";
import { UserContext } from "../functions/auth/userContext";
import Verify from "../components/Verify";

import bgregister from "../assets/bgregister.jpg";


function generateUID() {
    // I generate the UID from two parts here
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

const Register = () => {
    const { user, loading } = React.useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const [year, setYear] = useState("");
    const [file, setFile] = useState(null);

    //wait message on submit
    const [wait, setWait] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [fileError, setFileError] = useState(false);

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWait(true);

        if (file.size > 1000000) {
            setFileError(true)
            setWait(false)
            return
        }
        setFileError(false)

        try {
            const data = new FormData(formRef.current)
            data.append("email", email)

            auth.currentUser.getIdToken().then(function (idToken) {
                fetch(process.env.REACT_APP_API_URL + "api/ca/", {
                    method: 'post',
                    body: data,
                    headers: {
                        Authorization: idToken
                    }
                });
            }).catch(function (error) {
            });


            setEmail("");

            setWait(false);

        } catch (error) {
            console.log("submission failed. error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center h-full">
            <img
                src={bgregister}
                alt="bg image"
                style={{
                    filter: "brightness(50%)",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
            />
            <div
                className="absolute flex flex-col items-center mt-10 z-10"
            // style={{
            //   position: "absolute",
            //   //   padding: "2rem",
            //   marginTop: "1rem",
            //   //   width: "50%",
            //   //   height: "120vh",
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   zIndex: 10,
            // }}
            >
                <h1 className="text-white font-sans font-bold tracking-widest md:text-4xl text-2xl my-3">
                    DHISHNA
                </h1>
                <h2 className="text-white font-sans font-bold md:text-3xl text-lg my-2">
                    CAMPUS AMBASSADOR REGISTRATION
                </h2>
                {showForm ? (
                    <div className="w-full px-4">
                        <form onSubmit={handleSubmit} ref={formRef}>
                            <div className="mt-10">
                                <input
                                    name="name"
                                    required
                                    className="bg-transparent border border-neutral-400 text-white placeholder:text-neutral-400 text-md rounded-lg focus:ring-white focus:border-white block w-full p-3 dark:bg-transparent dark:focus:ring-blue-500 "
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="mt-10">
                                <input
                                    name="email"
                                    required
                                    className="bg-transparent border border-neutral-400 text-white placeholder:text-neutral-400 text-md rounded-lg focus:ring-white focus:border-white block w-full p-3 dark:bg-transparent dark:focus:ring-blue-500 "
                                    placeholder="Email"
                                    disabled
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>

                            <div style={{ marginTop: "2rem" }}>
                                <input
                                    name="phone"
                                    required
                                    className="bg-transparent border border-neutral-400 text-white placeholder:text-neutral-400 text-md rounded-lg focus:ring-white focus:border-white block w-full p-3 dark:bg-transparent dark:focus:ring-blue-500 "
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                />
                            </div>

                            <div style={{ marginTop: "2rem" }}>
                                <input
                                    required
                                    name="college"
                                    className="bg-transparent border border-neutral-400 text-white placeholder:text-neutral-400 text-md rounded-lg focus:ring-white focus:border-white block w-full p-3 dark:bg-transparent dark:focus:ring-blue-500 "
                                    placeholder="College"
                                    value={college}
                                    onChange={(e) => {
                                        setCollege(e.target.value);
                                    }}
                                />
                            </div>

                            <div style={{ marginTop: "2rem" }}>
                                <input
                                    name="year"
                                    required
                                    className="bg-transparent border border-neutral-400 text-white placeholder:text-neutral-400 text-md rounded-lg focus:ring-white focus:border-white block w-full p-3 dark:bg-transparent dark:focus:ring-blue-500 "
                                    placeholder="Year"
                                    value={year}
                                    onChange={(e) => {
                                        setYear(e.target.value);
                                    }}
                                />
                            </div>
                            <div style={{ marginTop: "2rem" }}>
                                <div
                                    className="flex flex-row bg-transparent border border-gray-300 dark:border-gray-500 rounded-xl p-2 my-3">
                                    <input
                                        name="verification"
                                        required
                                        type="file"
                                        placeholder="College ID"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hidden"
                                        id="upload"
                                        onChange={(e) => {
                                            setFile(e.target.files[0]);
                                        }}
                                    />
                                    <input
                                        type="text"
                                        className={`bg-transparent text-sm font-sans bg-transparent dark:border-gray-500 w-4/5 md:w-1/2 ${file && file
                                            ? "text-black dark:text-white"
                                            : "text-gray-400"
                                            }`}
                                        value={file && file.name ? file.name : "College ID"}
                                        disabled
                                    />
                                    <button
                                        className="border border-gray-400 rounded-3xl text-white text-sm md:w-fit w-24 p-1 px-2 ml-auto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const uploadButton = document.querySelector("#upload");
                                            uploadButton.click();
                                        }}
                                    >
                                        Upload file
                                    </button>
                                </div>
                            </div>
                            <div className="text-red-500">File should be less than 1MB</div>
                            {/* <div className="flex flex-col items-center my-5">
                                <p className="text-white font-bold font-sans">
                                    Already Registered? Login Here
                                </p>
                            </div> */}
                            <div className="flex flex-col items-center mt-10">
                                <button type="submit" disabled={wait} style={{opacity:wait?0.5:1}}>
                                    <div
                                        className="ml-10 cursor-pointer group mr-10 md:px-10 px-4 py-3 bg-white hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out mb-10 rounded-md rounded-tl-2xl rounded-br-2xl">
                                        {/* <div class="absolute top-0 left-0 w-8 h-8 bg-purple-950 transform rotate-45 -translate-x-7 -translate-y-5"></div>

<div class="absolute bottom-0 right-0 w-8 h-8 bg-purple-950 transform rotate-45 translate-x-7 translate-y-5"></div> */}

                                        <div className="text-black text-center font-bold text-md md:text-xl relative">
                                            <div>SIGN UP</div>
                                            {wait && (
                                                <div role="status" className="absolute" style={{margin:"auto", width:"30px", left:0, right:0, height:"30px", top:0, bottom:0}}>
                                                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-orange-300 animate-spin dark:text-orange-300 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </form>

                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-48">
                        <Verify />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
