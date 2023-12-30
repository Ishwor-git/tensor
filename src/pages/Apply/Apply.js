import React from "react";
import "./Apply.css";

import Navbar from "../../components/Navbar/Navbar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ApplyForm from "./ApplyForm";
import Footer from "../../components/Footer/Footer";

export default function Apply() {
  const applicationClosed = false;

  return (
    <div className="Apply">
      <Navbar />
      <section className="Apply-section">
        <SectionTitle title={"Apply for a role"} />

        <div className="Apply-content">
          {applicationClosed ? (
            <div className="Apply-closed">
              <p className="Apply-closed-icon">:(</p>
              <p className="Apply-closed-text">
                Application for this year has been closed
              </p>
            </div>
          ) : (
            <ApplyForm />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
