const certificateData = [
  {
    file: "99230041299_RISHITHA NALLAPUREDDY.png",
    title: "Workshop in GenAI",
    description: "Participated in a workshop conducted by GDG on campus where we were given breif about kubernetes, GenAI and few more things. Overall, it was a great experience and also i feel happy to be part of that."
  },
  {
    file: "CAN_37428693_4890318-1.png",
    title: "Skill India(Data Science)",
    description: "Completed a course where i was taught basics of Data science. Where i used in excel files and also capstone project which reflects my understanding for Data Science."
  },
  {
    file: "Certificate (1)-1.png",
    title: "PowerBI Certificate",
    description: "Completed certification course in PowerBI where i was taught about basics of powerBI."
  },
  {
    file: "Cloud_Computing_Certificate-1.png",
    title: "Cloud Computing Basics and along with the quiz things",
    description: "Gained foundational knowledge on cloud infrastructure, deployment models. I was so grateful for learning about this."
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
    description: "Completed PySpark training for big data processing and distributed computing. Learned about spark session and also RDBMS."
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

