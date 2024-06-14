import "./App.scss";
import Cart from "./components/cart/Cart";
import Sweet_noir from "/image/FAM3718_W000_MEDIUM.jpg";
import Header from "./components/header/Header";
function App() {
  const items = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Header />
      <div className="content-cart">
        {items.map((item) => (
          <Cart key={item} image={Sweet_noir} />
        ))}
      </div>
    </>
  );
}

export default App;
