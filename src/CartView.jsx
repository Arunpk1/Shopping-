import { clearItem, removeItem } from "./Appstore";
import CartList from "./CartList";
import { useSelector, useDispatch } from "react-redux";

function CartView() {
  const data = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearItem = (data) => dispatch(clearItem(data));
  const handleRemoveItem = (data) => dispatch(removeItem(data));

  return (
    <div className="flex flex-col items-center space-y-4 ">
      {data.map((list, index) => (
        <CartList key={index} list={list} />
      ))}
{data.length==0?<p className="flex justify-center items-center text-3xl">Add something to cart</p>:
      <div className="flex flex-row items-center gap-3">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
          onClick={() => handleClearItem(data)}
        >
          Clear
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
          onClick={() => handleRemoveItem(data)}
        >
          Remove
        </button>
      </div>}
    </div>
  );
}

export default CartView;
