const certificateFiles = [
  "99230041299_RISHITHA NALLAPUREDDY.png",
  "CAN_37428693_4890318-1.png",
  "Certificate (1)-1.png",
  "Cloud_Computing_Certificate-1.png",
  "Data Science Training - Certificate of Completion-1.png",
  "Rishitha n.png",
  "RISHITHA NALLAPUREDDY – Buildathon Certificate-1.png",
  "Rishitha(MIT).jpg",
  "Software_Development_Certificate-1.png",
  "Apachespark_certificate-1.png"
];

const Certificates = () => {
  return (
    <div className="certificates-page">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        {certificateFiles.map((file, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={`/${file}`}
              alt={`Certificate ${index + 1}`}
              className="certificate-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
