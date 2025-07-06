import { useTheme } from "@mui/material/styles";

// MUI Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import { Chip } from "@mui/material";

//Components
import BatteryStatus from "../BatteryStatus.tsx";
import CurrentOrderInfo from "../CurrentOrderInfo.tsx";

//Types
import { Order, Robot, Status, ROBOT_STATUS } from "../types.ts";

import { statusIndicators } from "../helpers/statusIndicators.tsx";

// See component in Figma: https://www.figma.com/design/k4MUYOOkqxqf83ASh2HLL6/Robot-Info-Card?node-id=2-5164&t=0yt87NTT3Qrbqsrc-4
const RobotCard = ({
  robot,
  onChange,
}: {
  robot: Robot;
  onChange: (robot: Robot) => void;
}) => {
  const theme = useTheme();

  const robotStatusIndicators = statusIndicators(robot.status as Status);

  const returnToBase = () => {
    // Handle robot update (API call, updates, etc.)
    const updatedInfo = { ...robot, status: ROBOT_STATUS.returning };
    onChange(updatedInfo);
  };

  return (
    <Card
      key={robot.robotId}
      variant="outlined"
      sx={{
        height: "fit-content",
        p: 1,
        boxShadow: theme.shadows[1],
        ":hover": {
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <CardHeader
        sx={{
          gap: 1,
          "& .MuiCardHeader-action": {
            margin: "auto",
            alignSelf: "center",
            width: "fit-content",
          },
          "& .MuiCardHeader-avatar": {
            height: "40px",
            width: "40px",
            "& .MuiSvgIcon-root": {
              height: "40px",
              width: "40px",
              color: robotStatusIndicators.color,
            },
          },
          "& .MuiTypography-root": {
            fontWeight: 600,
          },
        }}
        avatar={robotStatusIndicators.icon}
        action={
          <Chip label={robot.status} color={robotStatusIndicators.chipColor} />
        }
        title={`${robot.model} - ${robot.robotId}`}
        slotProps={{ title: { variant: "h5" } }}
      ></CardHeader>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <BatteryStatus percentage={robot.batteryLevel} />
        {robot.status === ROBOT_STATUS.onDelivery && (
          <CurrentOrderInfo
            order={robot.currentOrder as Order}
          ></CurrentOrderInfo>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", pb: 2 }}>
        <Button
          variant="contained"
          onClick={() => returnToBase()}
          disabled={
            !(
              robot.status === ROBOT_STATUS.onDelivery ||
              robot.status === ROBOT_STATUS.idle
            )
          }
        >
          Return to Base
        </Button>
      </CardActions>
    </Card>
  );
};

export default RobotCard;
