import { formatCurrency } from "../../helpers/helpers";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useCartStore } from "./cartStore";

function Cart() {
  const { cart, confirmOrder } = useCartStore((state) => ({
    cart: state.cart,
    confirmOrder: state.confirmOrder,
  }));
  const orderTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="mt-8 w-full rounded-lg bg-rose-50 p-6 sm:mt-11 sm:p-8 lg:h-fit lg:min-w-[384px] lg:p-6">
      <h3 className="mb-2 text-2xl font-bold text-red">
        Your Cart ({totalQuantity})
      </h3>

      <ul>
        {cart.map((dessert) => (
          <CartItem dessert={dessert} key={dessert.id} />
        ))}
      </ul>

      <div className="flex items-center justify-between py-5">
        <p className="text-sm text-rose-900">Order Total</p>
        <h4 className="text-2xl font-bold text-rose-900">
          {formatCurrency(orderTotal)}
        </h4>
      </div>

      <div className="mb-6 flex items-center justify-center gap-1.5 rounded-lg bg-rose-100 py-4 text-sm">
        <img src="./images/icon-carbon-neutral.svg" alt="icon of a tree" />
        <p className="text-rose-900">
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      <Button type="primary" onClick={confirmOrder}>
        Confirm Order
      </Button>
    </section>
  );
}

export default Cart;
