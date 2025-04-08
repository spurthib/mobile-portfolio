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
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', '@media (max-width: 768px)': { marginLeft: '10px' } }}>
          <li>Explored and identified datasets for large language models (LLMs), focusing on question-answering tasks in biomedical and scientific research.</li>
          <li>Tested various LLMs including Llama and Mistral AI, evaluating response quality, accuracy, and latency.</li>
          <li>Applied advanced statistical techniques to validate model performance and ensure robustness.</li>
          <li>Developed and fine-tuned custom evaluation pipelines using metrics such as precision, recall, F1-score, BLEU, and ROUGE.</li>
          <li>Conducted Q/A benchmarking to verify accuracy and citation validity, producing detailed evaluation reports.</li>
          <li>Utilized Nomic Embed for generating embedding vectors to improve similarity comparisons and LLM response accuracy.</li>
          <li>Performed comprehensive data cleaning and preprocessing to prepare datasets for LLM tasks.</li>
          <li>Created Python scripts for end-to-end pipeline automation: dataset formatting, prompt generation, output handling, and metric-based comparisons (Euclidean distance, cosine similarity).</li>
          <li>Conducted exploratory data analysis (EDA) using Pandas, NumPy, Matplotlib, and Seaborn to identify trends and anomalies in biomedical datasets.</li>
          <li>Designed and implemented a benchmarking system using SQLite3 for storing and analyzing LLM-generated results.</li>
          <li>Leveraged AWS Bedrock for deploying and scaling pre-trained foundation models in custom AI/ML applications.</li>
          <li>Automated provisioning, deployment, and monitoring using AWS CLI for efficient infrastructure management.</li>
          <li>Integrated Amazon S3 for data storage and cloud-based file sharing in ML workflows.</li>
          <li>Monitored AWS EC2 instances to optimize usage, reduce cost, and enhance performance.</li>
          <li>Containerized applications with Docker and deployed them on AWS servers for high-compute environments.</li>
          <li>Built Docker images with minimal size and included all dependencies using <code>venv</code> and <code>requirements.txt</code> for smooth cross-platform deployment.</li>
          <li>Created <code>systemd</code> service files for automatic application startup and high availability.</li>
          <li>Automated system updates, log capturing, and key processes to enhance maintainability and reduce manual effort.</li>
          <li>Integrated ML workflow observability using MLflow, Weights & Biases, and AWS CloudWatch for tracking experiments and performance.</li>
          <li>Set up a new pre-production environment to bridge dev and prod, improving stability and QA.</li>
          <li>Used GitLab for source control, CI/CD pipelines, and collaborative development.</li>
          <li>Integrated aider-chat (AI coding assistant) to speed up dev cycles and improve code quality.</li>
          <li>Collaborated with cross-functional teams to secure GPU resources and optimize LLM performance.</li>
          <li>Provided technical documentation, system support, and ongoing enhancements to ensure reliability and improve workflows.</li>
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