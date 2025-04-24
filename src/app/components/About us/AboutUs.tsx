"use client";

import React from "react";
import AboutSection from "./AboutSection";

const AboutUs: React.FC = () => {
  return (
    <main>
        <div className="w-full h-fit flex flex-col item-center gap-y-16">
        <AboutSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e23d22385c20ae8e31960c7abc74f298911df2e7d117bc17706a44296a64354b?placeholderIfAbsent=true&apiKey=e48c41967d9f4a3b81b2800666959c50"
        label="FindTutors"
        title="About Us"
        paragraphs={[
          "TutorBees.net is all about a culture of learning, experience-sharing, teaching, evolving and gravitating toward an upskilled community that contributes positively to society.",
          "We value the efforts of all learners, as well as the devotion of teachers and professionals who aspire for excellence. Teaching & knowledge sharing, when done in the right way, is the gateway to enhanced communication and learning.",
        ]}
        imagePosition="left"
      />

      <AboutSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6d642289aec9ed702162c6d54d0ba1bb2d17d115e4423b8c7d09dfcd4e7db186?placeholderIfAbsent=true&apiKey=e48c41967d9f4a3b81b2800666959c50"
        label="ABOUT US"
        title="Findtutors.pk"
        paragraphs={[
          "Pakistan is the fifth most populous country in the world. More than half the population is less than 25 years age. We're working with corporate organizations to help parents and parents-to-be understand the potential in IT careers.",
          "FindTutors is an online tutoring platform where experienced teachers and industry professionals are available to teach/ mentor.",
        ]}
        imagePosition="right"
      />

      <AboutSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/49fe4cdff2458ea3c2ed458bca5f1230df423e92c96c39ef0e3fb91c5b846941?placeholderIfAbsent=true&apiKey=e48c41967d9f4a3b81b2800666959c50"
        label="VISION"
        title="Our Vision"
        paragraphs={[
          "Pakistan is the fifth most populous country in the world. More than half the population is less than 25 years age.",
          "They can enhance their skills and knowledge, anywhere, anytime at findtutors.pk",
        ]}
        imagePosition="left"
      />
        </div>
   
    </main>
  );
};

export default AboutUs;
