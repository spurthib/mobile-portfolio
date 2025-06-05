export default function Skills() {
  const skills = {
    'AI / ML': [
      'Large Language Models (LLMs)',
      'Generative AI',
      'Prompt Engineering',
      'Retrieval-Augmented Generation (RAG)',
      'Nomic Embeddings',
      'Model Benchmarking',
      'Semantic Search',
      'Biomedical NLP',
      'Image Classification',
      'Point Cloud Segmentation',
      'Random Forest'
    ],
    'Cloud Platforms': [
      'AWS EC2',
      'S3',
      'Bedrock',
      'CloudWatch',
      'CloudTrail',
      'IAM',
      'AWS CLI'
    ],
    'DevOps & Automation': [
      'Docker',
      'Kubernetes',
      'CI/CD Pipelines',
      'Systemd Services',
      'CloudFormation',
      'Terraform (if applicable)',
      'LSMW',
      'Automation Scripting',
      'Monitoring Dashboards'
    ],
    'Frameworks & Libraries': [
      'LangChain',
      'PointNet',
      'ArcGIS',
      'Docker',
      'Jenkins',
      'aider-chat',
      'Node.js',
      'Express.js'
    ],
    'Languages': ['Python', 'SQL', 'Bash', 'Shell', 'R', 'Perl'],
    'Databases': ['MongoDB', 'ChromaDB', 'SQLite3', 'PostgreSQL', 'CyberArk'],
    'Tools': [
      'GitLab',
      'SVN',
      'ServiceNow',
      'Datadog',
      'Prometheus',
      'Grafana',
      'Kibana',
      'Elasticsearch',
      'Logstash',
      'StealthAudit'
    ],
    'Messaging & Streaming': [
      'Apache Pulsar',
      'Kafka (similar architecture)',
      'Pub/Sub & Queuing Models'
    ],
    'Testing & QA': [
      'User Acceptance Testing (UAT)',
      'Test Plan Development',
      'Bug Tracking',
      'LLM QA Benchmarking'
    ],
    'Soft Skills': [
      'Cross-functional Collaboration',
      'Communication',
      'Technical Documentation',
      'On-call Support',
      'Project Management'
    ]
  };

  return (
    <div className="skills-container">
      <style>{`
        .skills-container {
          width: 90%;
          max-width: 1300px;
          margin-left: auto;
          margin-right: auto;
          padding: 20px;
          color: #000;
          text-align: left;
        }

        .skills-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 30px;
          text-align: left;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;  /* two equal-width columns */
          gap: 60px 20px;                 /* 30px row gap, 20px column gap */
          justify-items: stretch;        /* makes all cards fill column width */
          align-items: stretch;          /* makes all cards equal height */
        }


        .skill-card {
          background-color: #f9f9f9;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          display: block;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .skill-category {
          font-size: 1.8rem;
          margin-bottom: 12px;
        }

        .skill-list {
          list-style-type: disc;
          margin-left: 20px;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skills-title {
            font-size: 2rem;
          }

          .skill-category {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-card">
            <h2 className="skill-category">{category}</h2>
            <ul className="skill-list">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
