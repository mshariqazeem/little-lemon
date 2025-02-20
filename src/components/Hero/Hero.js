import "./Hero.css";

function Hero(){
    return(
        <>
            <section className="hero-container">
                <article className="hero">
                    <section className="hero-text-container">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.</p>
                            <button type="button">Reserve a Table</button>
                    </section>
                    <img src="./restauranfood.jpg" alt="food on tray"/>
                </article>
            </section>
        </>
    );
}

export default Hero;