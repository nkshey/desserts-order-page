function EmptyCart() {
  return (
    <section className="mt-8 flex w-full flex-col items-center gap-9 rounded-lg bg-[white] p-6 sm:mt-11 sm:p-8 lg:h-fit lg:min-w-[384px] lg:p-6">
      <h3 className="self-start text-2xl font-bold text-red">Your Cart (0)</h3>
      <div className="flex flex-col items-center sm:py-8 lg:py-0">
        <img
          src="./images/illustration-empty-cart.svg"
          alt="illustration of a cake"
          className="mb-4"
        />
        <p className="mb-4 text-sm font-semibold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </section>
  );
}

export default EmptyCart;
