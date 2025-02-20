import "./Specials.css";

function Specials() {
    return (
        <section className="specials-container">
            <header className="specials-heading">
                <h1>This week's specials!</h1>
                <button type="button">Online Menu</button>
            </header>

            <section className="specials-content">
                <article className="specials">
                    <img src="./greek-salad.jpg" alt="Greek Salad"/>
                    <section className="specials-text">
                        <h4>Greek Salad <span className="price">$12.99</span></h4>
                        <p>The famous Greek salad of crispy lettuce, peppers, olives,
                            and our Chicago-style feta cheese, garnished with crunchy
                            garlic and rosemary croutons.</p>
                        <h5>Order a delivery</h5>
                    </section>
                </article>

                <article className="specials">
                    <img src="./bruchetta.svg" alt="Bruschetta"/>
                    <section className="specials-text">
                        <h4>Bruschetta <span className="price">$5.99</span></h4>
                        <p>Our Bruschetta is made from grilled bread that has been
                            smeared with garlic and seasoned with salt and olive oil.</p>
                        <h5>Order a delivery</h5>
                    </section>
                </article>

                <article className="specials">
                    <img src="./lemon-dessert.jpg" alt="Lemon Dessert"/>
                    <section className="specials-text">
                        <h4>Lemon Dessert <span className="price">$5.00</span></h4>
                        <p>This comes straight from grandma's recipe book, every last
                            ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h5>Order a delivery</h5>
                    </section>
                </article>
            </section>
        </section>
    );
}

export default Specials;