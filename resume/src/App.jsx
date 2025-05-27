import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* Your other sections */}
      <section id="home" className="h-screen bg-blue-100">Home</section>
      <section id="about" className="h-screen bg-green-100">About</section>
      <section id="projects" className="h-screen bg-yellow-100">Projects</section>
      <section id="contact" className="h-screen bg-pink-100">Contact</section>
    </div>
  );
}

export default App;
