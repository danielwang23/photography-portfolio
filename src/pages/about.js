import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <h1>About Me</h1>
        <p>Passionate photographer capturing beauty in every frame.</p>
      </section>
      <Footer />
    </>
  );
}