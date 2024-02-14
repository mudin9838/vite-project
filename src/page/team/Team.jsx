import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "NAME",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "AGE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "PHONE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "ACCESS",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              borderRadius: "3px",
              width: "99px",
              p: "5px",
              display: "flex",
              justifyContent:"space-evenly",
              alignItems:"center",
              backgroundColor:
              access==="Admin"
              ? theme.palette.primary.dark
              : access ==="Manager"
              ? theme.palette.secondary.dark
              :"#3da58a",
            }}
          >{access==="Admin"&&(
            <AdminPanelSettingsOutlined sx={{color:"#fff"}} fontSize="small"/>
          )}
          {access==="Manager"&& <SecurityOutlined sx={{color:"#fff"}} fontSize="small"/>}
          {access==="User"&& <LockOpenOutlined sx={{color:"#fff"}} fontSize="small"/>}
          
            <Typography sx={{fontSize:"13px", color:"#fff"}} variant="body1">{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box style={{ height: 600, width: "98%",mx:"auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;
