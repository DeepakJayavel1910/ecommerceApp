import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { toast } from "@/hooks/use-toast";
import { fetchAllProducts } from "@/store/admin/product-slice";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ShoppingListing = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { productList } = useSelector((state) => state.adminProducts);

  const handleAddToCart = (getCurrentProductId,getTotalStock) => {
    
    console.log(cartItems);
    
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });

          return;
        }
      }
    }


    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
    
  }


  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {productList && productList.length > 0
        ? productList.map((productItem) => (
            <ShoppingProductTile key={productItem._id} product={productItem} handleAddToCart={handleAddToCart}/>
          ))
        : null}
    </div>
  );
};

export default ShoppingListing;
