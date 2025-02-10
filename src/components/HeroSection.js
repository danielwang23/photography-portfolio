import Link from "next/link";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <section className="hero">
            {/* Left Image */}
            <div className="hero-img-left">
            <img
                src="./Me.JPG"
                alt="Photographer Img"
            />
            </div>

            {/* Right Image */}
            <div className="hero-img-right">
            <img
                // src="./oldwell-vert.jpg"
                src="./heroalt1.JPG"
                alt="Architecture Right"
            />
            </div>

            {/* Text below both images */}
            <div className="hero-text">
            Hi! I'm Daniel - a photographer, content creator, and outdoors lover.
            I capture everything from Nature, Events, Fun shoots, Headshots, or pretty much anything.
            </div>
        </section>
        );
    }

//   return (
//     <section className="hero">
//       <div className="hero-inner">
//         {/* Name or main headline */}
//         <h1 className="hero-title">Hi! I'm Daniel - a photographer, content creator, and outdoors lover.</h1>
//         <p>I capture everything from Nature, Events, Fun shoots, Headshots, or pretty much anything.</p>

        
//         <img
//           src="./oldwell-horiz.jpg"
//           alt="Photographer Profile"
//           className="hero-image"
//         />

//         {/* A brief about snippet */}
//         <p className="hero-about">
//           I’m a portrait and lifestyle photographer who loves capturing candid,
//           meaningful moments. Welcome to my online portfolio!
//         </p>

//         {/* Button linking to your About page */}
//         <Link href="/about" className="hero-button">
//           Learn More About Me
//         </Link>
//       </div>
//     </section>
//   );
// };

export default HeroSection;
