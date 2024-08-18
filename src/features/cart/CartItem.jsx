import { formatCurrency } from "../../helpers/helpers";
import { useCartStore } from "./cartStore";

function CartItem({ dessert }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <li
      key={dessert.id}
      className="flex items-center justify-between border-b border-rose-100 py-4 text-sm"
    >
      <div className="">
        <p className="mb-1.5 font-semibold text-rose-900">{dessert.name}</p>

        <div>
          <span className="mr-4 font-semibold text-red">
            {dessert.quantity}x
          </span>
          <span className="mr-2 text-rose-400">
            @ {formatCurrency(dessert.unitPrice)}
          </span>
          <span className="font-semibold text-rose-500">
            {formatCurrency(dessert.totalPrice)}
          </span>
        </div>
      </div>

      <button
        className="group rounded-full border border-rose-300 p-0.5 transition-all duration-200 hover:border-rose-900"
        onClick={() => removeFromCart(dessert.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            className="transition-all duration-200 group-hover:fill-rose-900"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </li>
  );
}

export default CartItem;
