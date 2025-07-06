// MUI
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

//Types
import { Order, ORDER_DATA_KEY } from "./types";

type OrderInfoKeyType = keyof Order;

export default function CurrentOrderInfo({ order }: { order: Order }) {
  const displayOrder: OrderInfoKeyType[] = [
    "orderId",
    "customerName",
    "estimatedDelivery",
    "deliveryAddress",
  ];

  const orderInfo = (key: OrderInfoKeyType): string => {
    if (!order[key]) {
      return "-";
    }
    if (key === "estimatedDelivery" && order[key]) {
      return new Date(order[key]).toLocaleString();
    }
    return String(order[key]);
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      sx={{
        height: "fit-content",
        width: "100%",
        p: 1,
      }}
    >
      {displayOrder.map((key: OrderInfoKeyType) => (
        <Grid
          key={key}
          size={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Typography variant="caption">{ORDER_DATA_KEY[key]}</Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            {orderInfo(key)}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
