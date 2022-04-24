
const Checkout = () => {
    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Name on Card" />
                <input type="text" placeholder="Expiration Date" />
                <input type="text" placeholder="CVV" />
                <button type="submit">Pay</button>
            </form>
        </div>
    );
}

export default Checkout;