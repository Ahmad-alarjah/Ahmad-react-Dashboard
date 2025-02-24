import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineComp from "../lineChart/LineComp";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";
const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap" }}
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      mt={3}
      gap={1.5}
    >
      <Paper sx={{ maxWidth: 900,minWidth:400, flexGrow: 1, p: 2 }}>
        <Stack
          direction={"row"}
          sx={{ flexGrow: 1 }}
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={1}
        >
          <Box>
            <Typography
              variant="h6"
              mb={1}
              mt={2}
              ml={4}
              fontWeight={"bold"}
              color={theme.palette.secondary.main}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $58,000,000
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineComp height="315px" isDashbaord={true} />
      </Paper>

      <Box
        marginLeft={"0px !important"}
        sx={{
          maxHeight: 420,
          overflowY: "auto",
          flexGrow: 1,
          p: 0,
          minWidth: "280px",
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            p={1.2}
            fontWeight={"bold"}
            color={theme.palette.secondary.main}
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((item , index) => {
          return (
            <Paper
            key={index}
              sx={{
                flexGrow: 1,
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1.2,
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight="600">
                  No Recent Transactions
                </Typography>
                <Typography variant="body2">Test2</Typography>
              </Box>
              <Typography variant="body1">Test3</Typography>
              <Typography
                variant="body2"
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
              >
                $ 232
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
