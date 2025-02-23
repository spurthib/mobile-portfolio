import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'flex-start', 
      padding: '40px 20px 20px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      height: '100vh', 
      overflow: 'hidden', 
      '@media (max-width: 768px)': { // Adjust for mobile
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        height: 'auto',
      },
    }}>
      {/* Profile Photo */}
      <img 
        src="/profile.jpg" 
        alt="Spurthi Reddy" 
        style={{ 
          width: '250px', 
          height: '250px', 
          borderRadius: '50%', 
          marginRight: '40px', 
          marginTop: '40px', 
          '@media (maxWidth: 768px)': { // Adjust for mobile
            marginRight: '0',
            marginBottom: '20px',
          },
        }} 
      />

      {/* Home Page Content */}
      <div style={{ 
        textAlign: 'left', 
        flex: 1, 
        '@media (max-width: 768px)': { // Adjust for mobile
          textAlign: 'center',
        },
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000' }}>Hi, I'm Spurthi Reddy</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', textAlign: 'justify', color: '#000' }}>
          I am a passionate <span style={{ fontWeight: 'normal' }}>Software Engineer</span> with expertise in <span style={{ fontWeight: 'normal' }}>AI/ML</span>, <span style={{ fontWeight: 'normal' }}>Large Language Models (LLMs)</span>, and <span style={{ fontWeight: 'normal' }}>Cloud Computing</span>. Skilled in <span style={{ fontWeight: 'normal' }}>Python</span>, <span style={{ fontWeight: 'normal' }}>AWS</span>, and modern development tools, I love building innovative, user-centric applications that solve real-world problems.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', textAlign: 'justify', color: '#000' }}>
          With a strong analytical mindset and a knack for problem-solving, I thrive on creating impactful software solutions. Currently, I am expanding my skills in <span style={{ fontWeight: 'normal' }}>full-stack development</span> to deliver scalable, high-performance applications that push the boundaries of technology.
        </p>

        {/* Social Links with Icons */}
        <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
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