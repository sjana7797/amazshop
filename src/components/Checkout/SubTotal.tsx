import React from "react";
import * as CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";

import { getCartTotalValue } from "../../context/reducer";

function SubTotal() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: any) => (
          <React.Fragment>
            <p>
              Subtotal ({`${cart.length} items`}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getCartTotalValue(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
