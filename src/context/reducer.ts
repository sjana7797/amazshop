import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./type";

export const initialState = {
  cart: [],
};

//Selector

export const getCartTotalValue = (cart: any) =>
  cart?.reduce(
    (
      amount: number,
      item: {
        id: number;
        img: string;
        title: string;
        price: number;
        rating: number;
      }
    ) => item.price + amount,
    0
  );

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, cart: [...state.cart, action.item] };
    case REMOVE_FROM_BASKET:
      const index = state.cart.findIndex(
        (cartItem: {
          id: number;
          img: string;
          title: string;
          price: number;
          rating: number;
        }) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else
        console.warn(
          `Can't remove product ( id :${action.id}) as its not in cart`
        );
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export { reducer };
