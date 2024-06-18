import { Link } from "react-router-dom";
function Cart({ image }) {
  return (
    <>
      <Link className="cart_link" to="1/detail">
        <div className="cart">
          <img src={image} alt="..." />
          <figcaption>Sweet de marque</figcaption>
          <div className="detail">
            <span className="price">$10.99</span>
            <span className="button">Show</span>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Cart;
