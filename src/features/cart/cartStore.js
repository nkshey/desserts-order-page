import { create } from "zustand";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const useCartStore = create((set) => ({
  cart: [],
  orderIsConfirmed: false,

  addToCart: (product) =>
    set((state) => ({
      cart: [
        ...state.cart,
        { ...product, quantity: 1, totalPrice: product.unitPrice },
      ],
    })),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),

  clearCart: () =>
    set(() => ({
      cart: [],
      orderIsConfirmed: false,
    })),

  incrementItemQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + 1,
              totalPrice: (product.quantity + 1) * product.unitPrice,
            }
          : product,
      ),
    })),

  decrementItemQuantity: (productId) =>
    set((state) => ({
      cart: state.cart
        .map((product) =>
          product.id === productId
            ? {
                ...product,
                quantity: product.quantity - 1,
                totalPrice: (product.quantity - 1) * product.unitPrice,
              }
            : product,
        )
        .filter((product) => product.quantity > 0),
    })),

  isInCart: (productId) => (state) =>
    state.cart.some((product) => product.id === productId),

  confirmOrder: () => {
    set({ orderIsConfirmed: true });
    scrollToTop();
  },
}));
