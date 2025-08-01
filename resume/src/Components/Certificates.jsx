const certificateData = [
  {
    file: "99230041299_RISHITHA NALLAPUREDDY.png",
    title: "Java Full Stack Developer",
    description: "Completed a full-stack Java training program covering Spring Boot, React, and SQL."
  },
  {
    file: "CAN_37428693_4890318-1.png",
    title: "AWS Fundamentals",
    description: "Introduction to core AWS services including EC2, S3, Lambda, and IAM."
  },
  {
    file: "Certificate (1)-1.png",
    title: "Python Programming",
    description: "Completed beginner to intermediate level Python programming course."
  },
  {
    file: "Cloud_Computing_Certificate-1.png",
    title: "Cloud Computing Basics and along with the quiz things",
    description: "Gained foundational knowledge on cloud infrastructure, deployment models, and SaaS/IaaS."
  },
  {
    file: "Data Science Training - Certificate of Completion-1.png",
    title: "Data Science Training",
    description: "Hands-on training in Python for data analysis, visualization, and machine learning basics."
  },
  {
    file: "Rishitha n.png",
    title: "UI/UX Design Workshop",
    description: "Participated in a hands-on UI/UX workshop focused on Figma and user-centered design."
  },
  {
    file: "RISHITHA NALLAPUREDDY – Buildathon Certificate-1.png",
    title: "Buildathon Winner",
    description: "Secured a top position in a national-level Buildathon event for an innovative web app."
  },
  {
    file: "Rishitha(MIT).jpg",
    title: "MIT Hackathon Participation",
    description: "Collaborated with a team to build a web-based health monitoring system."
  },
  {
    file: "Software_Development_Certificate-1.png",
    title: "Software Development Basics",
    description: "Learned key software engineering practices including Git, agile, and testing."
  },
  {
    file: "Apachespark_certificate-1.png",
    title: "Apache Spark with PySpark",
    description: "Completed PySpark training for big data processing and distributed computing."
  }
];


const Certificates = () => {
  return (
    <div className="certificates-page">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        {certificateData.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={`/${cert.file}`}
              alt={cert.title}
              className="certificate-img"
            />
            <h4>{cert.title}</h4>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

