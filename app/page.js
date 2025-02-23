"use client";

import { useState, useEffect } from "react";

// Separate component for the content below the profile picture
function ContentBelowPic({ isMobile }) {
  return (
    <div style={{ 
      textAlign: "center", // Always center text
      flex: 1, 
    }}>
      <h1 style={{ 
        fontSize: isMobile ? "2rem" : "2.5rem", 
        marginBottom: "20px", 
        color: "#000",
      }}>
        Hi, I'm Spurthi Reddy
      </h1>
      <p style={{ 
        fontSize: isMobile ? "1rem" : "1.2rem", 
        lineHeight: "1.6", 
        color: "#000",
      }}>
        I am a passionate <span style={{ fontWeight: "normal" }}>Software Engineer</span> with expertise in 
        <span style={{ fontWeight: "normal" }}> AI/ML</span>, 
        <span style={{ fontWeight: "normal" }}> Large Language Models (LLMs)</span>, and 
        <span style={{ fontWeight: "normal" }}> Cloud Computing</span>. 
        Skilled in <span style={{ fontWeight: "normal" }}>Python</span>, <span style={{ fontWeight: "normal" }}>AWS</span>, and modern 
        development tools, I love building innovative, user-centric applications that solve real-world problems.
      </p>
      <p style={{ 
        fontSize: isMobile ? "1rem" : "1.2rem", 
        lineHeight: "1.6", 
        color: "#000",
      }}>
        With a strong analytical mindset and a knack for problem-solving, I thrive on creating impactful software 
        solutions. Currently, I am expanding my skills in 
        <span style={{ fontWeight: "normal" }}> full-stack development</span> to deliver scalable, high-performance 
        applications that push the boundaries of technology.
      </p>

      {/* Skills Section */}
      <div style={{ marginTop: "30px" }}>
        <ul style={{ 
          listStyleType: "none", 
          padding: 0, 
          display: "flex", 
          flexDirection: isMobile ? "column" : "row", 
          gap: "20px", 
          justifyContent: "center", 
        }}>
          <li style={{ fontSize: "1rem", color: "#000", fontWeight: "bold" }}>AI/ML</li>
          <li style={{ fontSize: "1rem", color: "#000" , fontWeight: "bold"}}>Large Language Models (LLMs)</li>
          <li style={{ fontSize: "1rem", color: "#000" , fontWeight: "bold"}}>Cloud Computing</li>
          <li style={{ fontSize: "1rem", color: "#000", fontWeight: "bold" }}>Python</li>
          <li style={{ fontSize: "1rem", color: "#000" , fontWeight: "bold"}}>AWS</li>
        </ul>
      </div>

      {/* Social Links with Icons */}
      <div style={{ 
        marginTop: "30px", 
        display: "flex", 
        alignItems: "center", 
        gap: "15px", 
        justifyContent: "center", 
      }}>
        <a 
          href="https://www.linkedin.com/in/spurthi-reddy-114921256" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: "none" }}
        >
          <img 
            src="/LI-Logo.png" 
            alt="LinkedIn" 
            style={{ width: "100px", height: "30px" }} 
          />
        </a>
        <a 
          href="https://github.com/spurthib" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: "none" }}
        >
          <img 
            src="/github-mark.png" 
            alt="GitHub" 
            style={{ width: "40px", height: "40px" }} 
          />
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen width and update state
  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Add event listener to check screen width on resize
  useEffect(() => {
    checkScreenWidth(); // Check on initial render
    window.addEventListener("resize", checkScreenWidth); // Check on window resize
    return () => window.removeEventListener("resize", checkScreenWidth); // Cleanup
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", // Always stack vertically
      alignItems: "center", // Center-align content
      padding: "20px", 
      maxWidth: "1200px", // Limit width for better readability
      margin: "0 auto", 
      textAlign: "center", 
    }}>
      {/* Profile Photo */}
      <img 
        src="/profile.jpg" 
        alt="Spurthi Reddy" 
        style={{ 
          width: "250px", 
          height: "250px", 
          borderRadius: "50%", 
          marginBottom: "10px", // Space between image and content
        }} 
      />

      {/* Render the content below the profile picture */}
      <ContentBelowPic isMobile={isMobile} />
    </div>
  );
}
