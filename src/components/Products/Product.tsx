import { Rating } from "@mui/material";

import { useStateValue } from "../../context/StateProvider";
import { ADD_TO_BASKET } from "../../context/type";

// Sweet Allert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Product(props: {
  item: {
    id: number;
    title: string;
    price: number;
    rating: number;
    img: string;
  };
}) {
  const item = { ...props.item };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useStateValue();

  const fireSwal = (title: string) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: `${
        title.length > 10 ? `${title.substring(0, 9)}...` : title
      } Added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const addToCart = () => {
    const { id, img, title, price, rating } = item;
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id,
        img,
        title,
        price,
        rating,
      },
    });
    fireSwal(title);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__info_title">{item.title}</p>
        <p className="product__info_price">
          <small>&#8377;</small>
          <strong>{item.price}</strong>
        </p>
        <div className="product__info_rating">
          <Rating
            name="size-large"
            size="large"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
      <img src={item.img} alt={item.title} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
