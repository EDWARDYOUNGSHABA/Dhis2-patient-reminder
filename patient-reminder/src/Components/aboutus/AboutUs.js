import React from "react";
import "./AboutUs.css";

// Import images from the images folder
import AliceImage from "./images/adamson.jpg";
import BobImage from "./images/adamson2.jpg";
import CharlieImage from "./images/adamson.jpg";

// Team member data
const teamMembers = [
  { name: "Alice Johnson", role: "CEO", imageUrl: AliceImage },
  { name: "Bob Smith", role: "CTO", imageUrl: BobImage },
  { name: "Charlie Lee", role: "Lead Developer", imageUrl: CharlieImage },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Who We Are Section */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <div className="who-we-are-content">
          <p>
            We are a dedicated team of professionals committed to delivering high-quality 
            healthcare management solutions. Our focus is on creating seamless and user-friendly 
            applications that help doctors and patients communicate effectively, enhancing care 
            and fostering a better healthcare experience.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize healthcare management by providing innovative digital 
          solutions that improve patient care, communication, and access to healthcare resources. 
          We aim to empower healthcare providers and patients with the tools they need to stay 
          connected and informed.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="team-members">
        <h2>Meet the Team</h2>
        <div className="team-member-cards">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member">
              <img src={member.imageUrl} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details">
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:contact@healthcareapp.com">contact@healthcareapp.com</a>
        </p>
        <p>
          Phone: <a href="tel:+26592000003">+265 99 200 9991</a>
        </p>
        <p>Address: ZOMBA , MALAWI</p>
      </section>

    </div>
  );
};

export default AboutUs;
