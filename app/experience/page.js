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
          <li>Explored and identified datasets for <strong>large language models (LLMs)</strong>, focusing on <strong>question-answering tasks</strong> for biomedical and scientific research.</li>
          <li>Performed thorough <strong>data cleaning</strong> and <strong>preprocessing</strong> to prepare datasets for <strong>LLM-based tasks</strong>.</li>
          <li>Tested various LLM models, including <strong>Llama 3</strong>, <strong>Llama 3.1</strong>, <strong>Llama 3.2</strong>, and <strong>Llama 3.3</strong>, to evaluate their performance in terms of <strong>response quality</strong>, <strong>accuracy</strong>, and <strong>response time</strong>.</li>
          <li>Developed <strong>Python scripts</strong> for end-to-end processing, including dataset formatting, prompt creation, output generation, and performance comparison using metrics like <strong>Euclidean distance</strong> and <strong>cosine similarity</strong>.</li>
          <li>Utilized <strong>Nomic Embed</strong> model for calculating embedding vectors to enhance similarity comparisons and improve response accuracy.</li>
          <li>Configured and managed <strong>AWS CLI</strong> to interact with AWS services, automating tasks such as <strong>resource provisioning</strong>, <strong>deployments</strong>, and <strong>monitoring</strong> through command-line operations.</li>
          <li>Leveraged <strong>AWS Bedrock</strong> to deploy pre-trained foundation models, enabling the development and scaling of customized <strong>AI/ML applications</strong> efficiently.</li>
          <li>Leveraged <strong>aider-chat</strong>, an AI-driven coding assistant, to streamline software development processes, enhance code quality, and accelerate project timelines.</li>
          <li>Designed and implemented a <strong>benchmarking system</strong> using <strong>SQLite3</strong> to store and analyze LLM-generated results.</li>
          <li>Utilized <strong>Amazon S3</strong> to store data and integrated it with applications to facilitate <strong>file uploads</strong>, <strong>downloads</strong>, and <strong>sharing of assets</strong> in a cloud environment.</li>
          <li>Used <strong>GitLab</strong> to manage and update changes in project code, ensuring <strong>version control</strong>, <strong>collaboration</strong>, and seamless integration of new features and bug fixes.</li>
          <li>Conducted <strong>Q/A benchmarking</strong> to ensure accuracy and proper referencing in responses, compiling detailed evaluation reports.</li>
          <li>Packaged applications using <strong>Docker</strong> with all necessary dependencies, optimized image sizes, and managed environments with <strong>Python virtual environments (venv)</strong> and <strong>requirements.txt</strong> for seamless deployment across <strong>AWS</strong> and <strong>HPC systems</strong>.</li>
          <li>Containerized applications using <strong>Docker</strong> and deployed them on <strong>AWS servers</strong>, validating performance in a <strong>high-compute environment</strong>.</li>
          <li>Created <strong>systemd service configurations</strong> to ensure high availability and automatic startup on system boot.</li>
          <li>Automated critical processes, including <strong>system updates</strong> and <strong>log capture</strong>, to streamline operations, reduce manual effort, and enhance monitoring and troubleshooting.</li>
          <li>Established a new <strong>pre-production environment</strong>, bridging the gap between development and production to enhance stability.</li>
          <li>Monitored <strong>AWS EC2 instances</strong> to optimize resource utilization, ensure cost efficiency, and improve overall system performance.</li>
          <li>Collaborated with cross-functional teams to secure <strong>GPU access</strong> and optimize <strong>AI model performance</strong>.</li>
          <li>Provided ongoing support, documentation, and system enhancements to improve workflow efficiency and maintain system reliability.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>AWS</strong>, <strong>LLM</strong>, <strong>Bash</strong>, <strong>Python</strong>, <strong>GitLab</strong>, <strong>Docker</strong>, <strong>AWS Bedrock</strong>
        </p>
      </div>

      {/* LearnBeyond Consulting Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', '@media (max-width: 768px)': { fontSize: '1.5rem' } }}>LearnBeyond Consulting</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>Dec 2021 – Jan 2024</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', '@media (max-width: 768px)': { marginLeft: '10px' } }}>
          <li>Experience in distributed messaging systems like <strong>Apache Pulsar</strong> (similar to <strong>Apache Kafka</strong>) for building scalable, real-time <strong>data streaming applications</strong>.</li>
          <li>Developing tooling and automation for <strong>environment</strong>, <strong>containers</strong>, and <strong>build & deployment pipelines</strong>.</li>
          <li>Deep understanding of different messaging paradigms (<strong>pub/sub</strong>, <strong>queuing</strong>), as well as delivery models, <strong>quality-of-service</strong>, and <strong>fault-tolerance architectures</strong>.</li>
          <li>Deep understanding of the <strong>Pulsar architecture</strong> along with interplay of architecture components: <strong>brokers</strong>, <strong>Zookeeper</strong>, <strong>producers/consumers</strong>, <strong>Bookkeeper</strong>, <strong>Streams</strong>.</li>
          <li>Defined <strong>security groups</strong> which acted as virtual firewalls to control the incoming traffic onto one or more <strong>EC2 instances</strong>.</li>
          <li>Implemented and maintained the monitoring and alerting of production and corporate servers/storage using <strong>AWS CloudWatch</strong>.</li>
          <li>Developed scripts for <strong>build</strong>, <strong>deployment</strong>, <strong>maintenance</strong>, and related tasks using <strong>Jenkins</strong>, <strong>CloudFormation templates</strong>, and <strong>Bash</strong>.</li>
          <li>Created and developed <strong>deployments</strong>, <strong>namespaces</strong>, <strong>Pods</strong>, <strong>Services</strong>, <strong>Health checks</strong>, and <strong>persistent volumes</strong> etc., for <strong>Kubernetes</strong>.</li>
          <li>Responsible for <strong>Continuous Integration (CI)</strong> and <strong>Continuous Delivery (CD)</strong> process implementation using <strong>Jenkins Pipelines</strong> along with <strong>Python</strong> and <strong>Shell scripts</strong> to automate routine jobs.</li>
          <li>Configured <strong>ServiceNow</strong> to receive instant notifications of any configuration changes in the cloud environment.</li>
          <li>Created <strong>Datadog dashboards</strong> for various applications and monitored real-time and historical metrics.</li>
          <li>Experience with <strong>Elasticsearch</strong>, <strong>Logstash</strong>, <strong>Prometheus</strong>, <strong>Kibana</strong> for centralized logging and storage logs with <strong>S3 Bucket</strong> using <strong>Lambda Function</strong>.</li>
          <li>Troubleshoot and fix production and <strong>Pre-Production issues</strong> as and when required and document/communicate the resolution notes to other team members.</li>
          <li>Participated in <strong>24x7 On-call rotation</strong>.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>Jenkins</strong>, <strong>Pulsar</strong>, <strong>Kafka</strong>, <strong>AWS</strong>, <strong>Grafana</strong>, <strong>ULM</strong>, <strong>Bash</strong>, <strong>Python</strong>, <strong>GitLab</strong>
        </p>
      </div>

      {/* Accenture Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', '@media (max-width: 768px)': { fontSize: '1.5rem' } }}>Accenture</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>Jan 2014 – July 2018</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', '@media (max-width: 768px)': { marginLeft: '10px' } }}>
          <li>Worked as a <strong>Functional SAP Consultant</strong>.</li>
          <li>Handled <strong>SAP SD (Sales & Distribution)</strong> and <strong>SAP MM (Material Management)</strong> modules.</li>
          <li>Automated the customizations using <strong>LSMW tool</strong>.</li>
          <li>Expert in <strong>Shipping Point Determination</strong>, <strong>Route Determination</strong>, <strong>Transport and delivery scheduling</strong>, <strong>Backward delivery scheduling</strong>, <strong>Partial and Complete delivery</strong>.</li>
          <li>Worked on <strong>MTS (Make-to-Stock)</strong>, <strong>MTO (Make-to-Order)</strong>, <strong>Make-to-Order for Configurable Material</strong>, <strong>Stock Requirement/ MRP Lists</strong>, <strong>variant configuration</strong>, <strong>super BOMs</strong>, <strong>phantom items</strong>.</li>
          <li>Improved productivity by solving <strong>change Requests</strong> within <strong>Turn Around time</strong>.</li>
          <li>Developed and executed <strong>test plans</strong> and <strong>test cases</strong>.</li>
          <li>Identified bugs, monitored <strong>defect tracking systems</strong>, and performed tracking of non-testable software.</li>
        </ul>
      </div>

      {/* Soniks Consulting Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', '@media (max-width: 768px)': { fontSize: '1.5rem' } }}>Soniks Consulting</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>June 2013 – Dec 2013</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', '@media (max-width: 768px)': { marginLeft: '10px' } }}>
          <li>Performed day-to-day jobs such as monitoring <strong>log files</strong>, writing, and running the scripts to automatically watch the resources, <strong>CPU</strong>, <strong>memory</strong>.</li>
          <li>Created users and groups for certain departments. Configured <strong>DHCP</strong> for dynamic IP scheduling.</li>
          <li>Written <strong>shell scripts</strong> for automation of jobs, system monitoring, and error reporting.</li>
          <li>Managed <strong>SVN repositories</strong> for branching and merging.</li>
          <li>Used <strong>putty</strong> for reading, writing, executing the <strong>PERL/Shell scripts</strong>.</li>
          <li>Performed <strong>User acceptance testing (UAT)</strong> to all the test scenarios before intimating to the business.</li>
          <li>Worked with <strong>ServiceNow</strong> tool to handle <strong>change requests</strong> and <strong>incidents reported</strong>.</li>
          <li>Monitored servers and escalated <strong>emergency technical issues</strong> beyond scope to maintain optimum up-time.</li>
          <li>Strong scripting skills (<strong>Python</strong>, <strong>bash</strong>) to design and implement automation within the infrastructure.</li>
          <li>Provided <strong>after-hours on-call support</strong> by participating in the <strong>on-call rotation</strong>.</li>
          <li>Prepared various <strong>statistical</strong> and <strong>financial reports</strong> using <strong>MS Excel</strong>.</li>
          <li>Strong <strong>verbal</strong> and <strong>written communication skills</strong>, and an ability to work on project teams, with stakeholders, and across departments.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>Linux</strong>, <strong>Bash script</strong>, <strong>MS Office</strong>, <strong>SVN</strong>
        </p>
      </div>
    </div>
  );
}