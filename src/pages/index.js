import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

import "../styles/globals.css";

export default function Home() {
    return (
        <>
        <Navbar />
        <HeroSection />
        
        {/* Next section: main photo gallery */}
        <section className="gallery">
            <h2>My Latest Work</h2>
            {/* Insert your gallery grid or carousel here */}
         </section>

        {/* Another section: “Features gallery area” */}
        <section className="featured-photos">
            <h2>Featured Photos</h2>
            {/* Insert a custom grid, Masonry layout, or a Swiper carousel */}
        </section>

        {/* Another section: links to all galleries */}
        <section className="galleries-list">
            <h2>Browse Galleries</h2>
            {/* Possibly a grid of “Portraits”, “Events”, “Lifestyle” sections, etc. */}
            <button>View All Galleries</button>
        </section>

        {/* A final contact call-to-action at the bottom */}
        <section className="contact-cta">
            <h2>Ready to Book a Session?</h2>
            <p>Let’s connect and capture your story!</p>
            {/* <Link href="/contact">Contact Me</Link> */}
        </section>

        <Footer />
        </>
    );
  }

