import { ref, get } from "firebase/database";
import { database } from "../../firebase/config";
import { GET_ITEMS } from "./type";

function setAllItems(
  items: {
    id: number;
    title: string;
    price: number;
    rating: number;
    img: string;
  }[]
) {
  const action = {
    type: GET_ITEMS,
    items,
  };
  return action;
}

export function getAllItems() {
  return async (dispatch: any) => {
    const itemsRef = ref(database, "amazshop/items");
    const snapshot = await get(itemsRef);
    let itemsArr: {
      id: number;
      title: string;
      price: number;
      rating: number;
      img: string;
    }[] = [];
    snapshot
      .val()
      .forEach(
        (item: {
          id: number;
          title: string;
          price: number;
          rating: number;
          img: string;
        }) => {
          itemsArr.push(item);
        }
      );

    dispatch(setAllItems(itemsArr));
  };
}
