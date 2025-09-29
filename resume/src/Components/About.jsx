const About = () => {
  return (
    <div className="about-container p-6">
      <h1 className="about-heading text-2xl font-bold mb-4">
        About Me
      </h1>
      <p className="text-lg leading-relaxed text-gray-700">
        Hi, I’m <span className="font-semibold">Rishitha Nallapureddy</span>, 
        currently working as a <span className="font-semibold">Data Engineer</span> at 
        <span className="font-semibold"> ACT Fibernet</span>. My role primarily 
        involves designing and implementing efficient data migration solutions, 
        ensuring smooth transfer of data across different databases while 
        maintaining accuracy and consistency. 
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mt-3">
        I’m passionate about building reliable data pipelines, optimizing 
        performance, and contributing to projects that transform raw data 
        into valuable insights.
      </p>
    </div>
  );
};

export default About;
