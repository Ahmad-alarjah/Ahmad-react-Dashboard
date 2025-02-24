import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AdminPanelSettingsOutlined, SecurityOutlined, LockOpenOutlined } from "@mui/icons-material";
const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Phone",
      headerName: "Phone",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "Access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      display: "flex",
      justifyContent: "center",
      renderCell: ({ row: { Access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              borderRadius: "3px",
              width: "100px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: Access === "Admin" ? theme.palette.primary.dark : Access === "Manager" ? theme.palette.secondary.dark : "#3da58a",
            }}
          >
            {Access === "Admin" ? <AdminPanelSettingsOutlined sx={{ color:"#fff"}} fontSize="small" /> : Access === "Manager" ? <SecurityOutlined sx={{ color:"#fff"}} fontSize="small" /> : <LockOpenOutlined sx={{ color:"#fff"}} fontSize="small" />}
            <Typography variant="body1" sx={{fontSize:"13px", color:"#fff"}} align="center">
              {Access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
      <Box style={{ height: 580, width: "98%" }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
  );
};

export default Team;
