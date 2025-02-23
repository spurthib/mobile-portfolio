import { useState, useEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen width and update state
  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Add event listener to check screen width on resize
  useEffect(() => {
    checkScreenWidth(); // Check on initial render
    window.addEventListener('resize', checkScreenWidth); // Check on window resize
    return () => window.removeEventListener('resize', checkScreenWidth); // Cleanup
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
      alignItems: isMobile ? 'center' : 'flex-start', // Center-align on mobile
      padding: isMobile ? '20px' : '40px 20px 20px', // Adjust padding for mobile
      maxWidth: '1200px', 
      margin: '0 auto', 
      height: isMobile ? 'auto' : '100vh', // Allow scrolling on mobile
      overflow: 'hidden', 
    }}>
      {/* Profile Photo */}
      <img 
        src="/profile.jpg" 
        alt="Spurthi Reddy" 
        style={{ 
          width: '250px', 
          height: '250px', 
          borderRadius: '50%', 
          marginRight: isMobile ? '0' : '40px', // Remove right margin on mobile
          marginTop: isMobile ? '0' : '40px', // Remove top margin on mobile
          marginBottom: isMobile ? '20px' : '0', // Add bottom margin on mobile
        }} 
      />

      {/* Home Page Content */}
      <div style={{ 
        textAlign: isMobile ? 'center' : 'left', // Center-align text on mobile
        flex: 1, 
      }}>
        <h1 style={{ 
          fontSize: isMobile ? '2rem' : '2.5rem', // Adjust font size for mobile
          marginBottom: '20px', 
          color: '#000',
        }}>
          Hi, I'm Spurthi Reddy
        </h1>
        <p style={{ 
          fontSize: isMobile ? '1rem' : '1.2rem', // Adjust font size for mobile
          lineHeight: '1.6', 
          textAlign: isMobile ? 'center' : 'justify', // Center-align text on mobile
          color: '#000',
        }}>
          I am a passionate <span style={{ fontWeight: 'normal' }}>Software Engineer</span> with expertise in <span style={{ fontWeight: 'normal' }}>AI/ML</span>, <span style={{ fontWeight: 'normal' }}>Large Language Models (LLMs)</span>, and <span style={{ fontWeight: 'normal' }}>Cloud Computing</span>. Skilled in <span style={{ fontWeight: 'normal' }}>Python</span>, <span style={{ fontWeight: 'normal' }}>AWS</span>, and modern development tools, I love building innovative, user-centric applications that solve real-world problems.
        </p>
        <p style={{ 
          fontSize: isMobile ? '1rem' : '1.2rem', // Adjust font size for mobile
          lineHeight: '1.6', 
          textAlign: isMobile ? 'center' : 'justify', // Center-align text on mobile
          color: '#000',
        }}>
          With a strong analytical mindset and a knack for problem-solving, I thrive on creating impactful software solutions. Currently, I am expanding my skills in <span style={{ fontWeight: 'normal' }}>full-stack development</span> to deliver scalable, high-performance applications that push the boundaries of technology.
        </p>

        {/* Social Links with Icons */}
        <div style={{ 
          marginTop: '40px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px', 
          justifyContent: 'center', // Center-align social links
        }}>
          <a 
            href="https://www.linkedin.com/in/spurthi-reddy-114921256" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
          >
            <img 
              src="/LI-Logo.png" 
              alt="LinkedIn" 
              style={{ width: '100px', height: '30px' }} 
            />
          </a>
          <a 
            href="https://github.com/spurthib" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
          >
            <img 
              src="/github-mark.png" 
              alt="GitHub" 
              style={{ width: '40px', height: '40px' }} 
            />
          </a>
        </div>
      </div>
    </div>
  );
}