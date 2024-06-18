import { Outlet } from "react-router-dom"

function BoiteCart() {
  return (
    <>
      <div className="content-boite-cart">
        <Outlet />
      </div>
    </>
  )
}
export default BoiteCart