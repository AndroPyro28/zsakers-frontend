import { CartProduct } from "./Cart-Product";
import { User } from "./User";

export interface CreateOrder {
   address: string;
   contact: string;
   cartProducts: CartProduct[];
   paymentType: string;
   totalAmount: number;
   order_id?: string
}

export interface CreateOrderWalkin {
   totalAmount: number;
   order_id: string;
   cartProducts: CartProduct[];
}

export type orderStatus = 'pending' | 'onGoing' | 'completed' | 'cancelled' | 'all'
export type transactionType = 'ONLINE' | 'WALK_IN'
export interface GetOrdersByAdmin {
   order_status: orderStatus;
   search: string;
   transaction_type: transactionType
}

export interface OrderDetails {
 id: number;
  order_id: number;
  createdAt: Date;
  updatedAt: Date;
  paymentMethod: string;
  totalAmount: number;
  contact: string
  user: User
  userId: number
  address: string; 
  order_status: orderStatus
  delivery_status: number;
  cart_product: CartProduct[ ],
  cancel_reason: string;
  transaction_type: transactionType
}

export interface Summary {
   monthlyCancelledTransactions: {
      month: number;
      total: number;
  }[];
  monthlySuccessTransactions: {
      month: number;
      total: number;
  }[];
  monthlyTotalTransactions: {
      month: number;
      total: number;
  }[];
  monthlySales:  {
   month: number;
   total: number;
}[];
totalSalesToday: number
}

export interface ModelForYearly {
   totalTransaction: number
   totalCancelled: number
   totalSuccess: number
   totalSales: number
   month: number,
   onlineTransaction: number,
   walkinTransaction: number,
}