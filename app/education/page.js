export default function Education() {
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1300px', 
      margin: '0 auto', 
      color: '#000', 
      lineHeight: '1.4',
      '@media (max-width: 768px)': { // Responsive padding for mobile
        padding: '10px',
      },
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '20px', 
        '@media (max-width: 768px)': { // Responsive font size for mobile
          fontSize: '2rem',
        },
      }}>
        Education
      </h1>

      {/* Mississippi State University Section */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '10px', 
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '1.5rem',
          },
        }}>
          Mississippi State University
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px', fontStyle: 'italic' }}>2021</p>
        <ul style={{ 
          listStyleType: 'disc', 
          marginLeft: '20px', 
          lineHeight: '1.8',
          '@media (max-width: 768px)': { // Adjust margin for mobile
            marginLeft: '10px',
          },
        }}>
          <li>Masters in Computer Science</li>
          <li>GPA: 4.0</li>
          <li>
            <strong>Related Coursework:</strong>
            <ul style={{ 
              listStyleType: 'circle', 
              marginLeft: '20px',
              '@media (max-width: 768px)': { // Adjust margin for mobile
                marginLeft: '10px',
              },
            }}>
              <li>Artificial Intelligence</li>
              <li>Computational Intelligence</li>
              <li>Data Science</li>
              <li>Software Engineering</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Jawaharlal Nehru Technological University Section */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '10px', 
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '1.5rem',
          },
        }}>
          Jawaharlal Nehru Technological University
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px', fontStyle: 'italic' }}>2013</p>
        <ul style={{ 
          listStyleType: 'disc', 
          marginLeft: '20px', 
          lineHeight: '1.8',
          '@media (max-width: 768px)': { // Adjust margin for mobile
            marginLeft: '10px',
          },
        }}>
          <li>Bachelors in Computer Science</li>
          <li>GPA: 3.66</li>
          <li>
            <strong>Related Coursework:</strong>
            <ul style={{ 
              listStyleType: 'circle', 
              marginLeft: '20px',
              '@media (max-width: 768px)': { // Adjust margin for mobile
                marginLeft: '10px',
              },
            }}>
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Computer Networks</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}