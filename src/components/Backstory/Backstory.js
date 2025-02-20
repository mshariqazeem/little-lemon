import "./Backstory.css";

function Backstory(){
    return(
        <>
            <section className="backstory-container">
                <article className="backstory">
                    <section className="backstory-text-container">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    </section>
                    <section className="backstory-image-container">
                        <img src="./restaurant.jpg" alt="Restaurant's seating area" className="img-back"/>
                        <img src="./restaurant-chef.jpg" alt="Restaurant's Chef" className="img-front"/>
                </section>
                </article>
            </section>
        </>
    );
}

export default Backstory;