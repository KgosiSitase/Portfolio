// Importing everything necessary
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myImage from "../components/Me.jpg";
import Image from "react-bootstrap/Image";
import Resume from '../components/KgositsileSitaseResume.pdf'

// Main Component
export function Home() {
  return (
    <div>
      <section className="about-section">
        <div className="about-section">
          <div className="showcase">
            {/* Image of myself */}
            <div className="own-image text-start">
              <Image src={myImage} className="img-fluid w-50" />
            </div>

            {/* About me paragraph */}
            <div className="self-paragraph">
              <section className="showcase-content">
                <div className="about-title">Junior Web Developer</div>
                <div className="about-paragraph1 text-start">
                  Kgositsile Sitase is a dynamic junior web developer who
                  specializes in front-end and back-end. Graduate of a
                  comprehensive web development bootcamp with a focus on
                  crafting seamless user experiences.
                  <div className="py-2">
                    Strong communicator with a passion for clean, efficient
                    code. Eager to apply technical expertise and problem-solving
                    skills to drive innovation.
                  </div>
                </div>

                {/* Button to access resume */}
                <div className="py-2">
                  <a href={Resume} download="KgositsileSitaseResume.pdf">
                    <button className="about-button p-3">Download Resume</button>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
