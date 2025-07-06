export enum ORDER_DATA_KEY {
  orderId = "Order ID",
  customerName = "Customer Name",
  deliveryAddress = "Delivery Address",
  estimatedDelivery = "Estimated Delivery",
}
export enum BATTERY_HEALTH {
  critical = 10,
  low = 50,
  healthy = 100,
}

export enum ROBOT_STATUS {
  onDelivery = "On Delivery",
  idle = "Idle",
  charging = "Charging",
  error = "Error",
  returning = "Returning",
}

export type Order = {
  orderId: string;
  customerName: string;
  deliveryAddress: string;
  estimatedDelivery: Date;
};

export type Location = {
  latitude: string;
  longitude: string;
};

export type Status =
  | "On Delivery"
  | "Idle"
  | "Charging"
  | "Error"
  | "Returning";

export type Robot = {
  robotId: string;
  model: string;
  status: Status | string;
  batteryLevel: number;
  location: Location | Object;
  currentOrder: Order | Object;
};
