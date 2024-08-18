import { formatCurrency } from "../../helpers/helpers";
import Button from "../../ui/Button";
import { useCartStore } from "../cart/cartStore";
import OrderItem from "./OrderItem";

function Order() {
  const { cart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));
  const orderTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <section className="order-modal fixed bottom-0 max-h-[86dvh] w-full animate-slideInUp overflow-y-auto rounded-t-2xl bg-[white] px-6 pb-6 pt-10 lg:static lg:max-h-[700px] lg:w-[594px] lg:animate-zoomIn lg:rounded-2xl lg:p-10">
      <div className="mb-7">
        <img
          src="./images/icon-order-confirmed.svg"
          alt="confirmation icon"
          className="mb-7"
        />
        <h2 className="mb-1.5 pr-8 text-[40px] font-bold leading-[48px]">
          Order Confirmed
        </h2>
        <p className="text-rose-500">We hope you enjoy your food!</p>
      </div>

      <ul className="rounded-t-lg bg-rose-100 px-6 pt-2">
        {cart.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="mb-8 flex items-center justify-between rounded-b-lg bg-rose-100 p-6">
        <p className="text-sm">Order Total</p>
        <h4 className="text-2xl font-bold">{formatCurrency(orderTotal)}</h4>
      </div>

      <Button type="primary" className="font-regular" onClick={clearCart}>
        Start New Order
      </Button>
    </section>
  );
}

export default Order;
