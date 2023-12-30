import "./ApplyForm.css";

import React, { useState } from "react";

export default function ApplyForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [rollNo, setrollNo] = useState("");
  const [roleOther, setroleOther] = useState("");
  const [Question1, setQuestion1] = useState("");
  const [Question2, setQuestion2] = useState("");

  const [Question3, setQuestion3] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleCheckOtherInputChange = () => {
    const otherInput = document.getElementById("input-other");
    if (document.getElementById("role-other").checked) {
      otherInput.disabled = false;
      otherInput.required = true;
      // console.log("checked");
    } else {
      otherInput.disabled = true;
      otherInput.required = false;
      otherInput.value = "";
      // console.log("unchecked");
    }
  };

  const handleSubmit = () => {
    const data = new FormData();
    const rolesNode = document.querySelector(".section-role").childNodes;

    data.append("name", name);
    data.append("email", email);
    data.append("rollNo", rollNo);
    for (let i = 1; i < rolesNode.length - 1; i++) {
      const elementCheckbox = rolesNode[i].childNodes[0];
      if (elementCheckbox.checked) {
        data.append(elementCheckbox.id, true);
      } else {
        data.append(elementCheckbox.id, false);
      }
    }
    if (rolesNode[rolesNode.length - 1].childNodes[0].checked) {
      data.append("Other", roleOther);
    } else {
      data.append("Other", "");
    }

    // data.append("roleOther", roleOther);
    data.append("Question1", Question1);
    data.append("Question2", Question2);
    data.append("Question3", Question3);
    data.append("feedback", feedback);

    console.log(data);
  };

  return (
    <>
      <div className="Apply-form">
        <form action="#" method="post" className="form">
          <label htmlFor="title">Personal details </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
          />
          <input
            type="text"
            name="Roll no"
            id="clzRollNo"
            placeholder="Campus Roll Number"
            value={rollNo}
            onChange={(e) => {
              setrollNo(e.target.value);
            }}
            required
          />
          <label htmlFor="title">Roles and skills </label>
          <div className="section-role">
            <label className="question" htmlFor="questionRoles" id="question1">
              Which role are you interested in ?
            </label>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="Social_Media_Manager"
              />
              <label className="role" htmlFor="socialMediaManager">
                Social media manager
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="Event_Manager"
              />
              <label className="role" htmlFor="eventManager">
                Event Manager
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="Research_Associate"
              />
              <label className="role" htmlFor="researchAssociate">
                Research Associate
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="Graphics_Designer"
              />
              <label className="role" htmlFor="graphicsDesigner">
                Graphics Designer
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="General_Member"
              />
              <label className="role" htmlFor="generalMember">
                General Member
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="role-other"
                onChange={handleCheckOtherInputChange}
              />
              <input
                id="input-other"
                className="speical"
                type="text"
                placeholder="Other"
                value={roleOther}
                onChange={(e) => {
                  setroleOther(e.target.value);
                }}
                disabled
              />
            </span>
          </div>
          <label className="question" htmlFor="questionSkills">
            Any specific skill set that can be utilized in above mentioned
            domains? (optional)
          </label>
          <textarea
            name="skillQuestion1"
            id="skillQuestion1"
            cols="30"
            rows="5"
            value={Question1}
            onChange={(e) => {
              setQuestion1(e.target.value);
            }}
          ></textarea>
          <label htmlFor="title">Personal Expression </label>
          <label className="question" htmlFor="questionSkills">
            Why do you want to be part of this community?
          </label>
          <textarea
            name="skillQuestion1"
            id="skillQuestion1"
            cols="30"
            rows="5"
            value={Question2}
            onChange={(e) => {
              setQuestion2(e.target.value);
            }}
            required
          ></textarea>
          <label className="question" htmlFor="questionSkills">
            How do you plan to contribute to the community as a part of the
            above mentioned domains?
          </label>
          <textarea
            name="skillQuestion1"
            id="skillQuestion1"
            cols="30"
            rows="5"
            value={Question3}
            onChange={(e) => {
              setQuestion3(e.target.value);
            }}
            required
          ></textarea>
          <label className="question" htmlFor="questionSkills">
            Any query or feedbacks ?
          </label>
          <textarea
            name="skillQuestion1"
            id="skillQuestion1"
            cols="30"
            rows="5"
            value={feedback}
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
          ></textarea>
          <button className="button-submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
