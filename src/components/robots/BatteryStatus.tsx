import { useTheme } from "@mui/material/styles";

// MUI Components
import { Slider, Stack, Typography } from "@mui/material";

//Icons
import Battery0BarRoundedIcon from "@mui/icons-material/Battery0BarRounded";

//Types
import { BATTERY_HEALTH } from "./types";

const BatteryStatus = ({ percentage }: { percentage: number }) => {
  const theme = useTheme();

  const batteryStatusColor = () => {
    if (percentage < BATTERY_HEALTH["critical"]) {
      return "error";
    } else if (percentage < BATTERY_HEALTH["low"]) {
      return "warning";
    }
    return "success";
  };

  return (
    <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
      <Battery0BarRoundedIcon
        sx={{ transform: "rotate(90deg)" }}
      ></Battery0BarRoundedIcon>
      <Slider
        value={percentage}
        color={batteryStatusColor()}
        sx={{
          cursor: "default",
          "& .MuiSlider-thumb": {
            display: "none",
          },
          "& .MuiSlider-rail": {
            opacity: 0.1,
            border: `1px solid ${theme.palette.divider}`,
          },
        }}
      ></Slider>
      <Typography variant="body2" sx={{ width: "fit-content", flexShrink: 0 }}>
        {percentage} %
      </Typography>
    </Stack>
  );
};

export default BatteryStatus;
