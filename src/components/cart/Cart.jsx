function Cart({image}) {
  return (
    <>
      <div className="cart">
        <img src={image} alt="..." />
        <figcaption>Sweet de marque</figcaption>
        <div className="detail">
          <span className="price">$10.99</span>
          <span className="button">Show</span>
        </div>
      </div>
    </>
  );
}
export default Cart;
