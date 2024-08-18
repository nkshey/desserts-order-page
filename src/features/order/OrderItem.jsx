import { formatCurrency } from "../../helpers/helpers";

function OrderItem({ item }) {
  return (
    <li className="flex items-center justify-between gap-2.5 border-b border-rose-300/20 py-4 text-sm">
      <div className="flex gap-3">
        <img
          src={item.image.thumbnail}
          alt={item.name}
          className="h-[50px] w-[50px] rounded-sm"
        />

        <div className="flex min-w-0 flex-col justify-between">
          <p className="truncate font-semibold">{item.name}</p>

          <div className="flex gap-3.5">
            <p className="font-semibold text-red">{item.quantity}x</p>
            <p className="text-rose-500">@ {formatCurrency(item.unitPrice)}</p>
          </div>
        </div>
      </div>

      <p className="text-base font-semibold">
        {formatCurrency(item.totalPrice)}
      </p>
    </li>
  );
}

export default OrderItem;
