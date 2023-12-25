import { create } from 'zustand';
import {coffees} from '../../data.json'

export type Item = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
};

type CartStore = {
  cart: Item[];
  avaliableItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartStore>(set => {
  return {
    cart: [],
    avaliableItems: coffees,
    addToCart: (item: Item) =>
      set((state: CartStore) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id: string) =>
      set((state: CartStore) => ({
        cart: state.cart.filter(item => item.id != id)
      }))
  };
});
