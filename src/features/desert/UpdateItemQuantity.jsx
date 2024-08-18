import { useCartStore } from "../cart/cartStore";
import Button from "../../ui/Button";

function UpdateItemQuantity({ productId }) {
  const { cart, incrementItemQuantity, decrementItemQuantity } = useCartStore(
    (state) => ({
      cart: state.cart,
      incrementItemQuantity: state.incrementItemQuantity,
      decrementItemQuantity: state.decrementItemQuantity,
    }),
  );

  const product = cart.find((product) => product.id === productId);

  return (
    <div className="absolute -bottom-5 left-1/2 flex w-[163px] -translate-x-1/2 transform items-center justify-between rounded-full border border-red bg-red px-3 py-2.5 text-sm font-semibold text-rose-50">
      <Button type="round" onClick={() => decrementItemQuantity(productId)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path
            fill="#fff"
            className="transition-all duration-200 group-hover:fill-red"
            d="M0 .375h10v1.25H0V.375Z"
          />
        </svg>
      </Button>

      <span className="w-20 text-center">{product.quantity}</span>

      <Button type="round" onClick={() => incrementItemQuantity(productId)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            className="transition-all duration-200 group-hover:fill-red"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
