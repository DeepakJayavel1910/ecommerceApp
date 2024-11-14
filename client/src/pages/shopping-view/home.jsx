import { Button } from "@/components/ui/button"
import Ecommerce from "../../assets/Ecommerce.png"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"

const ShoppingHome = () => {

  const navigate = useNavigate()

  return (
    <Fragment>
      <div className="grid content-center place-items-center md:grid-cols-2 md:mt-5 lg:mt-10">
        <div className="flex justify-center items-center w-full p-2">
          <div className="flex justify-center items-center w-3/4">
            <img
              src={Ecommerce}
              alt="About Me"
              className="rounded-2xl w-full"
            />
          </div>
        </div>
        <div className="w-full p-8 lg:p-10">
          <h1
            className="text-[#4EA571] font-bold mb-4 text-2xl lg:text-4xl"
          >
            Ecommerce Website
          </h1>
          <h2
            className="text-[#337CA0] font-bold mb-4 text-xl lg:text-2xl"
          >
            Shop the Latest Trends, Styles, and Essentials
          </h2>

          <div className="flex my-6">
            <Button onClick={()=>{navigate("/shop/listing")}} className="px-10">Shop</Button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ShoppingHome
