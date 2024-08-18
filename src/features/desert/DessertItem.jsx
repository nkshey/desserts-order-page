import { formatCurrency } from "../../helpers/helpers";
import Button from "../../ui/Button";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useCartStore } from "../cart/cartStore";

function DessertItem({ dessert }) {
  const { category, name, unitPrice } = dessert;
  const { mobile, tablet, desktop } = dessert.image;

  const { addToCart, isInCart } = useCartStore((state) => ({
    addToCart: state.addToCart,
    isInCart: state.isInCart,
  }));

  const itemIsInCart = useCartStore(isInCart(dessert.id));

  return (
    <li>
      <div className="relative mb-9 sm:mb-5 lg:mb-7">
        <picture>
          <source srcSet={desktop} alt={name} media="(min-width: 1074px)" />
          <source srcSet={tablet} alt={name} media="(min-width: 768px)" />
          <img
            src={mobile}
            alt={name}
            className={`w-full rounded-lg ${itemIsInCart ? "ring-[3px] ring-red" : ""}`}
          />
        </picture>

        {itemIsInCart ? (
          <UpdateItemQuantity productId={dessert.id} />
        ) : (
          <Button type="addToCart" onClick={() => addToCart(dessert)}>
            <img src="./images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </Button>
        )}
      </div>

      <span className="text-sm text-rose-500">{category}</span>
      <h2 className="font-semibold">{name}</h2>
      <p className="font-semibold text-red">{formatCurrency(unitPrice)}</p>
    </li>
  );
}

export default DessertItem;
