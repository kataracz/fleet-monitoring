import { JSX } from "react";
import { useTheme } from "@mui/material/styles";

//Icons
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import ModeOfTravelRoundedIcon from "@mui/icons-material/ModeOfTravelRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

// Types
import type { ChipProps } from "@mui/material";
import { Status } from "../types";

export const statusIndicators = (
  status: Status
): {
  chipColor: ChipProps["color"] | "charging";
  icon: JSX.Element;
  color: string;
} => {
  const theme = useTheme();

  switch (status) {
    case "Idle":
      return {
        chipColor: "default",
        icon: <ScheduleRoundedIcon />,
        color: theme.palette.grey[500],
      };
    case "On Delivery":
      return {
        chipColor: "info",
        icon: <PinDropRoundedIcon />,
        color: theme.palette.info.dark,
      };
    case "Returning":
      return {
        chipColor: "info",
        icon: <ModeOfTravelRoundedIcon />,
        color: theme.palette.info.dark,
      };
    case "Error":
      return {
        chipColor: "error",
        icon: <ErrorRoundedIcon />,
        color: theme.palette.error.dark,
      };
    case "Charging":
      return {
        chipColor: "charging",
        icon: <BoltRoundedIcon />,
        // Fix type error later
        color: theme.palette.charging.main,
      };
    default:
      return {
        chipColor: "default",
        color: theme.palette.grey[500],
        icon: <ScheduleRoundedIcon />,
      };
  }
};
