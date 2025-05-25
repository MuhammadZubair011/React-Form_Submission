import React, {useState} from 'react'

export default function Submission() {

     const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume,
            url,
            selectedOption,
            about,
        });
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({ english: true, maths: false, physics: false });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };



  return (
     <div className="app-container">
            <h1>Contact Form</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name*</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Gender*</label>
                    <div className="radio-group">
                        <label><input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} /> Male</label>
                        <label><input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} /> Female</label>
                        <label><input type="radio" value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} /> Other</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Subjects</label>
                    <div className="checkbox-group">
                        <label><input type="checkbox" checked={subjects.english} onChange={() => handleSubjectChange("english")} /> English</label>
                        <label><input type="checkbox" checked={subjects.maths} onChange={() => handleSubjectChange("maths")} /> Maths</label>
                        <label><input type="checkbox" checked={subjects.physics} onChange={() => handleSubjectChange("physics")} /> Physics</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="file">Upload Resume*</label>
                    <input type="file" id="file" onChange={(e) => setResume(e.target.files[0])} required />
                </div>

                <div className="form-group">
                    <label htmlFor="url">Portfolio/LinkedIn URL*</label>
                    <input type="url" id="url"  value={url} onChange={(e) => setUrl(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="select">Preferred Stack</label>
                    <select id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="" disabled>Select one</option>
                        <optgroup label="Beginner">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="about">About You*</label>
                    <textarea
                        id="about"
                        rows="5"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-buttons">
                    <button type="reset" onClick={handleReset}>Reset</button>
                    <button type="submit"  onClick={(e) => {
    if (!window.confirm("Are you sure you want to submit the form?")) {
      e.preventDefault(); // Stops form submission
    }
  }}
                    >Submit</button>
                </div>
            </form>
        </div>
  )
}
