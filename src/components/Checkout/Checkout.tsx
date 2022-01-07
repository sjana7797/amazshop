import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

import { useStateValue } from "../../context/StateProvider";

function Checkout() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt="Advertisement"
          className="checkout__ad"
        />
        <div className="checkout__item_list">
          <h2 className="checkout__title">your Shopping Cart</h2>
          {cart.map(
            (item: {
              id: number;
              title: string;
              price: number;
              rating: number;
              img: string;
            }) => (
              <CheckoutProduct item={item} key={item.id} />
            )
          )}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
