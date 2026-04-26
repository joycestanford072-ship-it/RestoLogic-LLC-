import { create } from "zustand";

type OrderItem = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  items: OrderItem[];
  total: number;
  time: string;
};

type Store = {
  orders: Order[];
  revenue: number;
  addOrder: (order: Order) => void;
};

export const useStore = create<Store>((set) => ({
  orders: [],
  revenue: 0,

  addOrder: (order) =>
    set((state) => ({
      orders: [order, ...state.orders],
      revenue: state.revenue + order.total,
    })),
}));
