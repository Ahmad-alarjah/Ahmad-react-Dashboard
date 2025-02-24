
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from "@mui/system";
import { rows } from "./data";

const Invoices = () => {
    const columns = [
        {
          field: "id",
          headerName: "ID",
          flex: 1,
          align: "center",
          headerAlign: "center",
          width:33,
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
          width:33,

        },
        {
          field: "Phone",
          headerName: "Phone",
          headerAlign: "center",
          flex: 1,
          align: "center",
        },
        {
            field: "Address",
            headerName: "Address",
            headerAlign: "center",
            flex: 1,
            align: "center",
        },
        {
            field: "City",
            headerName: "City",
            headerAlign: "center",
            flex: 1,
            align: "center",
        },
        {
            field:"zipCode",
            headerName:"Zip Code",
            headerAlign:"center",
            flex:1,
            align:"center",
        }, 
        {
            field:"registrarId",
            headerName:"Registrar ID",
            headerAlign:"center",
            flex:1,
            align:"center",
            width:33,

        }
      ];
    return (
        <Box style={{ height: 580, width: "98%" }}>
        <DataGrid slots={{ toolbar: GridToolbar }} checkboxSelection rows={rows} columns={columns} />
      </Box>
    );
};

export default Invoices;