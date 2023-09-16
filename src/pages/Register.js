import React, { useState } from "react";
import { db } from "../functions/auth/firebase";
import { ref, set, push } from "firebase/database";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dbRef = ref(db, "CA");

    const data = {
      name: name,
      email: email,
      phone: phone,
      college: college,
      year: year,
    };

    const newEntryRef = push(dbRef);

    set(newEntryRef, data)
      .then(() => {
        alert("Form submitted");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });

    setName("");
    setEmail("");
    setPhone("");
    setCollege("");
    setYear("");
  };

  //temp input styles
  const inputStyles = {
    border: "solid",
    borderColor: "black",
    borderRadius: "1rem",
    padding: "0.5rem",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "2rem",
          marginTop: "1rem",
          width: "50%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "solid",
          borderColor: "black",
          borderRadius: "2rem",
        }}
      >
        <h1>Dhishna</h1>
        <h2>Campuss Ambassador Registration</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: "2rem" }}>
            <input
              required
              style={inputStyles}
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div style={{ marginTop: "2rem" }}>
            <input
              required
              style={inputStyles}
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
              style={inputStyles}
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
              style={inputStyles}
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
              style={inputStyles}
              placeholder="Year"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
            }}
          >
            <button
              style={{
                padding: "0.3rem",
                borderRadius: "1rem",
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
