export default function Research() {
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1300px', 
      margin: '0 auto', 
      color: '#000', 
      lineHeight: '1.6',
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
        Research Experience
      </h1>

      {/* Glacier Change Analysis Project */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          margin: '0', 
          padding: '0', 
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '1.3rem',
          },
        }}>
          Glacier Change Analysis Using Satellite Imagery
        </h2>
        <h3 style={{ 
          fontSize: '1.2rem', 
          margin: '0', 
          padding: '0', 
          color: '#555',
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '1rem',
          },
        }}>
          Department of Geosciences, Mississippi State University
        </h3>
        <p style={{ 
          fontSize: '1rem', 
          margin: '0', 
          padding: '0', 
          fontStyle: 'italic',
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '0.9rem',
          },
        }}>
          May 2021 – September 2021
        </p>
        <ul style={{ 
          listStyleType: 'disc', 
          marginLeft: '20px', 
          marginTop: '10px',
          '@media (max-width: 768px)': { // Adjust margin for mobile
            marginLeft: '10px',
          },
        }}>
          <li>Analyzed changes in US glaciers over time using satellite imagery and geospatial tools.</li>
          <li>Downloaded and processed Sentinel-2A satellite images for September 2020.</li>
          <li>Performed image resampling to adjust resolution and image stacking using Python.</li>
          <li>Collected training samples from stacked images and extracted data points using ArcGIS.</li>
          <li>Conducted image classification using the Random Forest classifier in R, achieving over 98% classification accuracy.</li>
        </ul>
      </div>

      {/* Semantic Segmentation of Point Cloud Data Project */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          margin: '0', 
          padding: '0', 
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '1.3rem',
          },
        }}>
          Semantic Segmentation of Point Cloud Data
        </h2>
        <h3 style={{ 
          fontSize: '1.2rem', 
          margin: '0', 
          padding: '0', 
          color: '#555',
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '1rem',
          },
        }}>
          Department of Building Construction Science, Mississippi State University
        </h3>
        <p style={{ 
          fontSize: '1rem', 
          margin: '0', 
          padding: '0', 
          fontStyle: 'italic',
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '0.9rem',
          },
        }}>
          January 2021 – April 2021
        </p>
        <ul style={{ 
          listStyleType: 'disc', 
          marginLeft: '20px', 
          marginTop: '10px',
          '@media (max-width: 768px)': { // Adjust margin for mobile
            marginLeft: '10px',
          },
        }}>
          <li>Conducted a literature review on point cloud data to identify gaps in existing research.</li>
          <li>Proposed and developed a methodology for semantic segmentation of point clouds.</li>
          <li>Analyzed UAV-collected point cloud data containing 226 million points.</li>
          <li>Implemented the PointNet algorithm for semantic segmentation of point clouds.</li>
        </ul>
      </div>

      {/* Information Security and Data Visualization Project */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          margin: '0', 
          padding: '0', 
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '1.3rem',
          },
        }}>
          Information Security and Data Visualization
        </h2>
        <h3 style={{ 
          fontSize: '1.2rem', 
          margin: '0', 
          padding: '0', 
          color: '#555',
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '1rem',
          },
        }}>
          National Strategic Planning & Analysis Research Center (NSPARC), Mississippi State University
        </h3>
        <p style={{ 
          fontSize: '1rem', 
          margin: '0', 
          padding: '0', 
          fontStyle: 'italic',
          '@media (max-width: 768px)': { // Responsive font size for mobile
            fontSize: '0.9rem',
          },
        }}>
          February 2020 – December 2020
        </p>
        <ul style={{ 
          listStyleType: 'disc', 
          marginLeft: '20px', 
          marginTop: '10px',
          '@media (max-width: 768px)': { // Adjust margin for mobile
            marginLeft: '10px',
          },
        }}>
          <li>Managed data access and monitored threats to critical assets using StealthAudit.</li>
          <li>Monitored system and network operations for suspicious or detrimental activity.</li>
          <li>Investigated information security incidents, determined root causes, and recommended mitigation strategies.</li>
          <li>Planned and managed projects using Microsoft Project and Gantter.</li>
          <li>Managed servers, identified risks, and optimized database server performance.</li>
          <li>Built safes and platforms for centralized, tamper-proof audit records using CyberArk.</li>
          <li>Created data visualizations in R to graphically communicate insights from large datasets.</li>
        </ul>
      </div>
    </div>
  );
}