import { Box, Paper, useTheme } from "@mui/material";
import PieComp from "../pieChart/PieComp";
import BarComp from "../barChart/BarComp";
import GeoComp from "../geography/GeoComp";
import { Typography } from "@mui/material";

const Row3 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", flexGrow: 1, minWidth: "400px" }}
      gap={3}
      mt={3}
    >
      <Paper
        sx={{ flexGrow: 1, minWidth: "400px", width: "33%", height: "750px" }}
      >
        <Typography
          variant="h3"
          align="center"
          color={theme.palette.secondary.main}
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Campaign
        </Typography>

        <Box sx={{ width: "50%", margin: "-90px auto" }}>
          <PieComp />
        </Box>

        <Typography variant="h6" align="center">
          $48000 Revenue Generated
        </Typography>
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          variant="h3"
          align="center"
          color={theme.palette.secondary.main}
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>

        <Box sx={{ minWidth: "50%", margin: "-30px auto auto 75px" }}>
        <BarComp />
        </Box>  
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          variant="h3"
          align="center"
          color={theme.palette.secondary.main}
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Geography Based Traffic
        </Typography>
        <Box sx={{ minWidth: "50%", margin: "60px auto 0" }}>
        <GeoComp />
        </Box>
      </Paper>
    </Box>
  );
};

export default Row3;
