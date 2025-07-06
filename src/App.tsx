import { useState } from "react";

// MUI Components
import { Box, Grid, Typography } from "@mui/material";

// Components
import RobotCard from "./components/robots/InfoCard/RobotCard.tsx";

// Import sample data
import data from "./data.json";

//Types
import { Robot } from "./components/robots/types.ts";

function App() {
  const robotData: Robot[] = data;
  const [robots, setRobots] = useState<Robot[]>(robotData);

  function handleRobotInfoUpdate(robot: Robot) {
    // Handle robot update
    const updatedInfo = robots.map((e: Robot) =>
      e.robotId === robot.robotId ? robot : e
    );
    setRobots(updatedInfo);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}>
      <Typography variant="h3"> Robots </Typography>
      <Grid
        container
        direction="row"
        spacing={{ xs: 2, md: 4 }}
        sx={{
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {robots.map((robot) => (
          <Grid
            key={robot.robotId + "-grid-item"}
            size={{ xs: 12, md: 6, xl: 3 }}
          >
            <RobotCard
              key={robot.robotId}
              robot={robot}
              onChange={(updatedInfo) => handleRobotInfoUpdate(updatedInfo)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
