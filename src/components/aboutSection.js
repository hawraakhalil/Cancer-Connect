import React, { forwardRef } from "react";
import { Container } from "react-bootstrap";
import './aboutSection.css';

const AboutSection = forwardRef((props, ref) => {
  return (
    <div id="specificSectionRef" ref={ref}>
      <Container fluid className="container-about p-3">
        <p className="header-text">MISSION AND VISION</p>
        <div>
          <p className="subheader-text">MISSION</p>
          <p className="body-text">
            To create a supportive online community that connects cancer
            patients and survivors, providing a platform for them to share
            their experiences, thoughts, and emotions. Through this platform,
            we aim to foster understanding, empathy, and solidarity among
            individuals affected by cancer, offering them a sense of belonging
            and support. Through the power of shared stories, we strive to
            enhance the mental well-being and overall quality of life of
            cancer patients and survivors.
          </p>
        </div>
        <div>
          <p className="subheader-text">VISION</p>
          <p className="body-text">
            A world where no one fights cancer alone. A vibrant online
            community that empowers cancer patients and survivors, giving them
            a voice and enabling them to connect with others who truly
            understand their journey. Through our platform, we aspire to
            foster hope, resilience, and emotional well-being by encouraging
            open conversations, sharing valuable resources, and promoting
            access to support networks. Together, we can make a difference in
            the lives of those affected by cancer, creating a more inclusive
            and compassionate world.
          </p>
        </div>
      </Container>
    </div>
  );
});

export default AboutSection;
