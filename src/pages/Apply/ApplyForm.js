import "./ApplyForm.css";

import React from "react";

export default function ApplyForm() {
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
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="Roll no"
            id="clzRollNo"
            placeholder="Campus Roll Number"
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
                id="clzRollNo"
              />
              <label className="role" htmlFor="socialMediaManager">
                Social media manager
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="clzRollNo"
              />
              <label className="role" htmlFor="eventManager">
                Event Manager
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="clzRollNo"
              />
              <label className="role" htmlFor="researchAssociate">
                Research Associate
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="clzRollNo"
              />
              <label className="role" htmlFor="graphicsDesigner">
                Graphics Designer
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="clzRollNo"
              />
              <label className="role" htmlFor="generalMember">
                General Member
              </label>
            </span>
            <span>
              <input
                type="checkbox"
                className="checkbox-label"
                id="clzRollNo"
              />
              <input className="speical" type="text" placeholder="Other" />
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
            required
          ></textarea>
          <button className="button-submit">Submit</button>
        </form>
      </div>
    </>
  );
}
