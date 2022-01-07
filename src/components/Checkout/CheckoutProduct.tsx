import { Rating } from "@mui/material";

import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { useStateValue } from "../../context/StateProvider";
import { REMOVE_FROM_BASKET } from "../../context/type";

function CheckoutProduct({
  item,
}: {
  item: {
    id: number;
    title: string;
    price: number;
    rating: number;
    img: string;
  };
}) {
  const { id, title, price, rating, img } = item;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <div className="checkout__product">
      <img src={img} alt="" className="checkout__product_img" />
      <div className="checkout__product_info">
        <p className="checkout__product_title">{title}</p>
        <p className="checkout__product_price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__product_rating">
          <Rating readOnly={true} precision={0.5} value={rating} />
        </div>
        <button className="checkout__product_btn" onClick={removeFromCart}>
          <RemoveShoppingCartIcon />
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
