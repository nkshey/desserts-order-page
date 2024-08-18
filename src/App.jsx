import Cart from "./features/cart/Cart";
import { useCartStore } from "./features/cart/cartStore";
import EmptyCart from "./features/cart/EmptyCart";
import DessertsList from "./features/desert/DessertsList";
import Order from "./features/order/Order";
import Header from "./ui/Header";

const body = document.body;

function App() {
  const { cart, orderIsConfirmed } = useCartStore((state) => ({
    cart: state.cart,
    orderIsConfirmed: state.orderIsConfirmed,
  }));

  orderIsConfirmed
    ? (body.style.overflow = "hidden")
    : body.removeAttribute("style");

  return (
    <div className="lg:py-12 relative flex flex-col items-center overflow-hidden px-6 py-7 text-rose-900">
      <main>
        <section className="lg:grid-cols-[800px_auto] lg:grid lg:gap-x-10">
          <div>
            <Header />
            <DessertsList />
          </div>
          {!cart.length ? <EmptyCart /> : <Cart />}
        </section>
      </main>
      {orderIsConfirmed && (
        <div className="lg:flex lg:items-center lg:justify-center lg:p-4 fixed inset-0 flex items-center justify-center bg-[black]/50">
          <Order />
        </div>
      )}
    </div>
  );
}

export default App;
