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
  cartValue: number;
  availableItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
  incrementItemQuantity: (item: Item) => void;
  decrementItemQuantity: (item: Item) => void;
};

export const useCartStore = create<CartStore>(set => {
  const initialAvailableItems: Item[] = coffees.map(coffee => ({
    ...coffee,
    quantity: 0
  }));
  return {
    cart: [],
    cartValue: 0,
    availableItems: initialAvailableItems,
    addToCart: (item: Item) =>
      set((state: CartStore) => ({
        cart: [...state.cart, item],
      })),
    removeFromCart: (id: string) =>
      set((state: CartStore) => {
        const itemToRemove = state.cart.find(item => item.id === id);
        if (itemToRemove) {
          return {
            cart: state.cart.filter(item => item.id !== id),
            cartValue: state.cartValue - itemToRemove.price * itemToRemove.quantity
          };
        }
        return state;
      }),
    incrementItemQuantity: (item: Item) =>
      set((state: CartStore) => {
        const updatedAvailableItems = state.availableItems.map(avItem => {
          console.log(avItem.id,item.id);
          
          if (avItem.id === item.id) {
            const updatedQuantity = item.quantity + 1;
            return { ...item, quantity: updatedQuantity };  
          }
          return avItem;
        });

        const addedItem = updatedAvailableItems.find(avItem => avItem.id === item.id);
        if (addedItem) {
          return {
            availableItems: updatedAvailableItems,
            cartValue: state.cartValue + addedItem.price
          };
        }
        return { availableItems: updatedAvailableItems };
      }),
    decrementItemQuantity: (item: Item) =>
      set((state: CartStore) => {
        const updatedAvailableItems = state.availableItems.map(avItem => {
          if (avItem.id === item.id && item.quantity > 0) {
            const updatedQuantity = item.quantity - 1;
            return { ...item, quantity: updatedQuantity };
          }
          return avItem;
        });

        const removedItem = updatedAvailableItems.find(avItem => avItem.id === item.id);
        if (removedItem) {
          return {
            availableItems: updatedAvailableItems,
            cartValue: state.cartValue - removedItem.price
          };
        }
        return { availableItems: updatedAvailableItems };
      })
  };
});
