export default function Experience() {
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
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', '@media (max-width: 768px)': { fontSize: '2rem' } }}>Experience</h1>

      {/* FDA Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', '@media (max-width: 768px)': { fontSize: '1.5rem' } }}>U.S. Food & Drug Administration (FDA)</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>Jan 2024 – Present</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain to enable accurate, context-aware question answering from internal document repositories.</li>
          <li>Leveraged Nomic Embed models to generate high-quality vector embeddings for semantic search and similarity comparisons.</li>
          <li>Used MongoDB to store raw documents and metadata, and ChromaDB to persist and query vector embeddings for real-time retrieval.</li>
          <li>Designed robust chunking strategies to split documents contextually before embedding, improving retrieval precision and LLM performance.</li>
          <li>Automated the end-to-end RAG pipeline in Python, from document ingestion and chunking to embedding generation and similarity-based retrieval.</li>
          <li>Benchmarked LLMs (LLaMA 3.x, MistralAI) across three datasets, improving QA response accuracy by 15% and reducing latency by 25% through custom prompt strategies.</li>
          <li>Explored and identified biomedical datasets for LLM-based question-answering tasks, aligning data sources with model capabilities.</li>
          <li>Led data cleaning and preprocessing efforts for biomedical datasets, ensuring high-quality, structured input to improve model training and inference.</li>
          <li>Automated LLM data pipelines using Python and AWS CLI, reducing preprocessing time by 40% and accelerating model evaluation cycles.</li>
          <li>Deployed pre-trained foundation models using AWS Bedrock, reducing deployment time by 20% and enabling scalable, low-latency AI applications.</li>
          <li>Packaged and containerized applications using Docker, optimized image sizes, and managed dependencies with virtual environments and requirements.txt.</li>
          <li>Deployed containerized apps on AWS EC2 and validated performance in high-compute environments with GPU acceleration.</li>
          <li>Engineered production-ready systemd services to ensure 99.9% uptime and automatic recovery after system reboots.</li>
          <li>Automated key operational tasks including system updates, log capture, and monitoring to streamline system management and reduce manual effort.</li>
          <li>Established a new pre-production environment to bridge development and production workflows, improving deployment stability.</li>
          <li>Designed and implemented a benchmarking system using SQLite3 to track and analyze LLM outputs, supporting data-driven prompt tuning.</li>
          <li>Led QA benchmarking initiatives, improving reference accuracy by 20% and delivering monthly evaluation reports to guide LLM enhancements.</li>
          <li>Utilized Amazon S3 for storing and accessing data, enabling efficient uploads, downloads, and integration with cloud-based pipelines.</li>
          <li>Configured and managed AWS CLI to automate resource provisioning, deployments, and system monitoring.</li>
          <li>Used GitLab for source control and CI/CD pipelines, ensuring efficient code collaboration, change tracking, and release management.</li>
          <li>Leveraged aider-chat, an AI-powered coding assistant, to accelerate development, improve code quality, and reduce debugging time.</li>
          <li>Collaborated with cross-functional teams to secure GPU access and optimize AI model performance across distributed infrastructure.</li>
          <li>Provided ongoing documentation, support, and system enhancements to maintain reliability and ensure operational efficiency.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>AWS</strong>, <strong>AI/ML</strong>, <strong>LLM</strong>, <strong>Bash</strong>, <strong>Python</strong>, <strong>GitLab</strong>, <strong>Docker</strong>, <strong>AWS Bedrock</strong>
        </p>
      </div>

      {/* Protech Solutions Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', '@media (max-width: 768px)': { fontSize: '1.5rem' } }}>Protech Solutions</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>Dec 2021 – Jan 2024</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', '@media (max-width: 768px)': { marginLeft: '10px' } }}>
          <li>Collaborated with Data Engineers and operations team to implement ETL processes and ensure data availability for analysis.</li>
          <li>Wrote and optimized SQL queries to extract, transform, and load data tailored to analytical requirements.</li>
          <li>Performed preliminary data analysis using descriptive statistics and handled anomalies such as removing duplicates and imputing missing values.</li>
          <li>Worked on data cleaning and reshaping, generating segmented subsets using NumPy and pandas libraries in Python.</li>
          <li>Created scripts and integrated systems including Python, SQL, and R to analyze large volumes of current and historical data.</li>
          <li>Developed analytical approaches to answer high-level business questions and provide actionable recommendations.</li>
          <li>Developed and implemented predictive models using machine learning algorithms such as linear regression, classification, and Random Forest.</li>
          <li>Evaluated model performance using F-score, accuracy, and precision metrics.</li>
          <li>Leveraged AWS services like S3, EC2, and SageMaker to prepare data, build, deploy, and optimize predictive models.</li>
          <li>Utilized AWS EC2 instances for model training and deployment, optimizing compute resources to handle high computational requirements during model development and testing.</li>
          <li>Integrated AWS Lambda to automate real-time data processing tasks, improving system responsiveness and reducing manual intervention.</li>
          <li>Worked with the NLTK library for natural language processing and pattern recognition in textual data.</li>
          <li>Automated recurring data analysis tasks and reporting pipelines using Python scripts, reducing manual workload and improving efficiency.</li>
          <li>Ensured data integrity and compliance with data governance policies, supporting initiatives related to data privacy and security.</li>
          <li>Managed version control and collaborated on code with team members using GitLab repositories, ensuring smooth collaboration and code integrity.</li>
          <li>Implemented continuous integration (CI) pipelines in GitLab CI/CD to automate testing, model validation, and deployment, increasing code deployment efficiency and reducing errors.</li>
          <li>Documented project requirements and work plans in Confluence and managed progress through Jira Sprints.</li>
          <li>Routinely presented metrics and outcomes of analysis to team members and management to support data-driven decision-making.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>AWS</strong>, <strong>Python</strong>, <strong>SQL</strong>, <strong>NumPy</strong>, <strong>Pandas</strong>, <strong>NLTK</strong>, <strong>Bash</strong>, <strong>GitLab</strong>
        </p>
      </div>

      {/* Accenture Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', '@media (max-width: 768px)': { fontSize: '1.5rem' } }}>Accenture</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>Jan 2014 – July 2018</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', '@media (max-width: 768px)': { marginLeft: '10px' } }}>
          <li>Created and analyzed business requirements to design and implement technical data solutions that align with organizational goals.</li>
          <li>Designed and maintained MySQL databases, creating user-defined functions and stored procedures to automate daily reporting tasks.</li>
          <li>Built ETL pipelines to retrieve data from NoSQL databases and load aggregated data into the analytical platform for analysis.</li>
          <li>Wrote and executed SQL scripts to implement database changes, including table updates, view creation, and the addition of stored procedures.</li>
          <li>Conducted reviews of database objects (tables, views) to assess the current design, identify discrepancies, and provide recommendations for optimization.</li>
          <li>Performed performance tuning and optimization of SQL scripts and stored procedures to improve data processing efficiency and overall database performance.</li>
          <li>Analyzed database discrepancies and synchronized development, pre-production, and production environments with accurate data models.</li>
          <li>Developed and maintained various SQL scripts and job scripts to handle complex transactional and reporting tasks, ensuring data formatting as needed.</li>
          <li>Monitored and maintained multiple automated data extraction and daily job processes, ensuring seamless data workflows.</li>
          <li>Created ad-hoc SQL queries to generate custom reports, trend analysis, and customer-specific reports.</li>
          <li>Manipulated data and calculated key metrics for reporting using MySQL queries and MS Excel, facilitating data-driven decision-making.</li>
          <li>Debugged and resolved execution errors using data logs, trace statistics, and thorough examination of source and target data.</li>
          <li>Created and scheduled Unix cron jobs to periodically load flat files into Oracle databases, ensuring timely data availability.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>SQL</strong>, <strong>Unix</strong>, <strong>Stored procedures</strong>, <strong>ETL</strong>
        </p>
      </div>

      {/* Soniks Consulting Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', '@media (max-width: 768px)': { fontSize: '1.5rem' } }}>Soniks Consulting</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>June 2013 – Dec 2013</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', '@media (max-width: 768px)': { marginLeft: '10px' } }}>
          <li>Assisted in gathering and analyzing business requirements to create data-driven insights for decision-making.</li>
          <li>Cleaned, transformed, and organized data from various sources to prepare it for analysis using Excel and SQL.</li>
          <li>Performed basic data analysis using descriptive statistics, identifying trends and patterns to support business operations.</li>
          <li>Wrote simple SQL queries to extract data from databases and performed data manipulation tasks for reporting purposes.</li>
          <li>Developed and maintained basic reports and dashboards to track key performance indicators (KPIs) and business metrics.</li>
          <li>Participated in team meetings to discuss ongoing projects, provide progress updates, and receive feedback from senior data analysts.</li>
          <li>Prepared various statistical and financial reports using MS Excel.</li>
          <li>Strong verbal and written communication skills, and an ability to work on project teams, with stakeholders, and across departments.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>Linux</strong>, <strong>Bash script</strong>, <strong>MS Office</strong>, <strong>SQL</strong>
        </p>
      </div>
    </div>
  );
}