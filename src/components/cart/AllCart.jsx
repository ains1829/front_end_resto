import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import Sweet_noir from "/image/FAM3718_W000_MEDIUM.jpg";
function AllCart() {
  const items = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div className="content-cart">
        {items.map((item) => (
          <Cart key={item} image={Sweet_noir} />
        ))}
      </div>
      <Outlet />
    </>
  )
}
export default AllCart