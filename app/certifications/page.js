export default function Certifications() {
    const certification = {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: 'Issued April 2025 · Expires April 2028',
      verifyUrl: 'https://www.credly.com/badges/b4398172-44f0-46c4-b6e3-8df80036768a/public_url',
      imageUrl: '/aws-certified-solutions-architect-associate.png',
      // description: 'Demonstrated ability to design and deploy scalable systems on AWS.'
    };
  
    return (
      <div style={{ 
        padding: '20px', 
        maxWidth: '1300px', 
        margin: '0 auto', 
        color: '#000', 
        lineHeight: '1.4',
        '@media (max-width: 768px)': {
          padding: '10px',
        },
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '30px',
          '@media (max-width: 768px)': {
            fontSize: '2rem',
          },
        }}>
          Certifications
        </h1>
  
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          maxWidth: '800px',
          margin: '0 auto',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.15)',
          },
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '25px',
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #e0e0e0',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              textAlign: 'center',
            },
          }}>
            <img 
              src={certification.imageUrl} 
              alt={`${certification.title} badge`} 
              style={{
                width: '100px',
                height: '100px',
                marginRight: '25px',
                objectFit: 'contain',
                '@media (max-width: 768px)': {
                  marginRight: '0',
                  marginBottom: '15px',
                },
              }}
            />
            <div>
              <h2 style={{
                fontSize: '1.8rem',
                margin: '0 0 8px 0',
                '@media (max-width: 768px)': {
                  fontSize: '1.5rem',
                },
              }}>
                {certification.title}
              </h2>
              <p style={{ 
                fontSize: '1.1rem',
                color: '#666',
                margin: '0',
                fontStyle: 'italic',
              }}>
                {certification.issuer}
              </p>
            </div>
          </div>
          
          <div style={{ padding: '25px' }}>
            <p style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '20px',
            }}>
              {certification.description}
            </p>
            
            <div style={{ 
              fontSize: '1rem',
              color: '#555',
              marginBottom: '15px',
            }}>
              <p style={{ margin: '8px 0' }}>
                <strong>Issued:</strong> {certification.date}
              </p>
              
            </div>
            
            <div style={{ 
              paddingTop: '15px',
              borderTop: '1px solid #eee',
              textAlign: 'center',
            }}>
              <a 
                href={certification.verifyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#333',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '500',
                  transition: 'background-color 0.2s',
                  ':hover': {
                    backgroundColor: '#555',
                    textDecoration: 'none',
                  },
                }}
              >
                Verify Credential
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }