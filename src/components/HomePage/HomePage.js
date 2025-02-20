import "./HomePage.css";
import Backstory from "../Backstory/Backstory";
import Hero from "../Hero/Hero";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";

function HomePage() {
    return (
       <>
         <div className="homepage-container">
            <Hero/>
            <Specials/>
            <Testimonials/>
            <Backstory/>
         </div>
       </>
    );
   }

export default HomePage;