import React, {useState, useRef} from "react";
import {db} from "../functions/auth/firebase";
import {ref, set, push} from "firebase/database";
import {storage} from "../functions/auth/firebase";
import {getDownloadURL, ref as storageRef} from "firebase/storage";
import {uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import {notRegistered} from "../functions/auth/signIn";
import {UserContext} from "../functions/auth/userContext";

const Register = () => {

    const {user, loading} = React.useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const [year, setYear] = useState("");
    const [file, setFile] = useState(null);

    const formRef = useRef(null);

    const uploadFile = () => {
        if (file === null) return Promise.resolve(null);
        const split = file.name.split('.');
        // const name = split.slice(0, -1).join("")
        const extension = split.slice(-1)[0]
        const fileRef = storageRef(storage, `collegeID/${user.email + "-" + user.uid + extension}`);

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
        } catch (error) {
            console.log("submission failed. error:", error);
        }
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
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div style={{marginTop: "2rem"}}>
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

                    <div style={{marginTop: "2rem"}}>
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

                    <div style={{marginTop: "2rem"}}>
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

                    <div style={{marginTop: "2rem"}}>
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

                    <div style={{marginTop: "2rem"}}>
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
                    <div style={{marginTop: "2rem"}}>
                        <input
                            required
                            type="file"
                            style={inputStyles}
                            onChange={(e) => {
                                setFile(e.target.files[0]);
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
