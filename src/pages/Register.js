import React, { useState, useRef } from "react";
import { db } from "../functions/auth/firebase";
import { ref, set, push } from "firebase/database";
import { storage } from "../functions/auth/firebase";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { notRegistered } from "../functions/auth/signIn";
import { UserContext } from "../functions/auth/userContext";
import Verify from "../components/Verify";

import bgregister from "../assets/bgregister.jpg";

const Register = () => {
  const { user, loading } = React.useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState(null);

  //wait message on submit
  const [wait, setWait] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const formRef = useRef(null);

    const uploadFile = () => {
        if (file === null) return Promise.resolve(null);
        const split = file.name.split('.');
        // const name = split.slice(0, -1).join("")
        const extension = split.slice(-1)[0]
        const fileRef = storageRef(storage, `collegeID/${user.email}-${user.uid}.${extension}`);

    // Return the promise chain here
    return uploadBytes(fileRef, file)
      .then((snapshot) => {
        console.log("Image uploaded");
        return getDownloadURL(snapshot.ref);
      })
      .catch((error) => {
        console.log("Upload failed", error);
        throw error;
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWait(true);

    try {
      const downloadUrl = await uploadFile();

      const dbRef = ref(db, "CA/" + user.uid);

      const data = {
        name: name,
        email: email,
        phone: phone,
        college: college,
        year: year,
        fileUrl: downloadUrl,
      };

      await set(dbRef, data);

      formRef.current.reset();

      setName("");
      setEmail("");
      setPhone("");
      setCollege("");
      setYear("");
      setFile(null);
      setWait(false);

      setShowForm(false);
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
                  required
                  className="bg-transparent border border-neutral-400 text-white placeholder:text-neutral-400 text-md rounded-lg focus:ring-white focus:border-white block w-full p-3 dark:bg-transparent dark:focus:ring-blue-500 "
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div style={{ marginTop: "2rem" }}>
                <input
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
                <div className="flex flex-row bg-transparent border border-gray-300 dark:border-gray-500 rounded-xl p-2 my-3">
                  <input
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
                    className={`bg-transparent text-sm font-sans bg-transparent dark:border-gray-500 w-4/5 md:w-1/2 ${
                      file && file
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
              <div className="flex flex-col items-center my-5">
                <p className="text-white font-bold font-sans">
                  Already Registered? Login Here
                </p>
              </div>
              <div className="flex flex-col items-center mt-10">
                <button type="submit">
                  <div className="ml-10 cursor-pointer group mr-10 md:px-10 px-4 py-3 bg-white hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out mb-10 rounded-md rounded-tl-2xl rounded-br-2xl">
                    {/* <div class="absolute top-0 left-0 w-8 h-8 bg-purple-950 transform rotate-45 -translate-x-7 -translate-y-5"></div>

<div class="absolute bottom-0 right-0 w-8 h-8 bg-purple-950 transform rotate-45 translate-x-7 translate-y-5"></div> */}

                    <p className="text-black text-center font-bold text-md md:text-xl">
                      SIGN UP
                    </p>
                  </div>
                </button>
              </div>
            </form>
            {wait && (
              <p className="text-white text-center font-sans font-semibold">
                Submitting form...please wait
              </p>
            )}
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
