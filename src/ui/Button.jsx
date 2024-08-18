function Button({ children, type, onClick }) {
  const styles = {
    primary:
      "w-full rounded-full bg-red py-4 font-semibold text-rose-50 transition-colors duration-200 hover:bg-[#8b290b]",
    round:
      "rounded-full border border-rose-50 p-0.5 transition-all duration-200 hover:bg-rose-50 group",
    addToCart:
      "absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 transform items-center gap-2 rounded-full border border-rose-400 bg-rose-50 px-7 py-2.5 text-sm font-semibold text-rose-900 transition-all duration-200 hover:text-red hover:border-red",
  };

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
