import { create } from 'zustand';
import { coffees } from '../../data.json';

export type Item = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
  cart: Item[];
  availableItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
  incrementItemQuantity: (item: Item) => void;
  decreaseItemQuantity: (item: Item) => void;
};

export const useCartStore = create<CartStore>(set => {
  const initialAvailableItems: Item[] = coffees.map(coffee => ({
    ...coffee,
    quantity: 0
  }));
  return {
    cart: [],
    availableItems: initialAvailableItems,
    addToCart: (item: Item) =>
      set((state: CartStore) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id: string) =>
      set((state: CartStore) => ({
        cart: state.cart.filter(item => item.id != id)
      })),
    incrementItemQuantity: (item: Item) =>
      set((state: CartStore) => {
        console.log(state,item)
        const updatedAvailableItems = state.availableItems.map(avItem =>
          avItem.id === item.id
            ? { ...avItem, quantity: avItem.quantity + 1 }
            : avItem
        );
        return { availableItems: updatedAvailableItems };
      }),
    decrementItemQuantity: (item: Item) =>
      set((state: CartStore) => {
        const existingItem = state.availableItems.find(
          avItem => avItem.id === item.id
        );

        if (existingItem && existingItem.quantity > 0) {
          const updatedAvailableItems = state.availableItems.map(avItem =>
            avItem.id === item.id
              ? { ...avItem, quantity: avItem.quantity - 1 }
              : avItem
          );
          return { availableItems: updatedAvailableItems };
        }

        return { availableItems: [...state.availableItems] };
      })
  };
});
