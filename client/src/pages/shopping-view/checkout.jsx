import { ShieldCheck } from "lucide-react"

const ShoppingCheckout = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-2xl md:text-[40px] text-center">Your Order has been placed successfully</h1>
      <ShieldCheck className="size-24 lg:size-32 mt-10 mb-20" color="#45d142" />
    </div>
  )
}

export default ShoppingCheckout
