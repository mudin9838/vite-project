import React from 'react'
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import { Avatar, Typography, styled } from '@mui/material';
import MuiDrawer from "@mui/material/Drawer";
import { useTheme } from '@emotion/react';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleOutlineOutlined, PersonOutlineOutlined, PieChartOutlineOutlined, ReceiptLongOutlined, TimelineOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

import {grey} from '@mui/material/colors';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  

  
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

  const Array1=[
    {"text":"Dashboard", "icon": <HomeOutlined/>,"path":"/"},
    {"text":"Manage Team", "icon": <PeopleOutlineOutlined/>,"path":"/team"},
    {"text":"Contacts Information", "icon": <ContactsOutlined/>,"path":"/contacts"},
    {"text":"Invoice Balances", "icon": <ReceiptLongOutlined/>,"path":"/invoices"}, 
]

const Array2=[
    {"text":"Profile Form", "icon": <PersonOutlineOutlined/>,"path":"/form"},
    {"text":"Calendar", "icon": <CalendarTodayOutlined/>,"path":"/calendar"},
    {"text":"Faq Page", "icon": <HelpOutlineOutlined/>,"path":"/faq"},
]

const Array3=[
    {"text":"Bar Chart", "icon": <BarChartOutlined/>,"path":"/bar"},
    {"text":"Pie Chart", "icon": <PieChartOutlineOutlined/>,"path":"/pie"},
    {"text":"Line Chart", "icon": <TimelineOutlined/>,"path":"/line"},
    {"text":"Geography Chart", "icon": <MapOutlined/>,"path":"/geography"}, 
]


const SideBar=({open, handleDrawerClose})=> {
  let location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? (
          <ChevronRightIcon />
        ) : (
          <ChevronLeftIcon />
        )}
      </IconButton>
    </DrawerHeader>
<Divider/>
    <Avatar sx={{mx:"auto", width:open ? 88: 44, height: open? 88: 44,my:1, border:"2px solid grey", transition:"0.25s"}} alt="Remy Sharp" 
    src="https://yt3.ggpht.com/yti/AGOGRCrmhdy4U2zPIn4E6exfLj5oE5Gb9AsTJyY6_LUKmQ=s88-c-k-c0x00ffffff-no-rj" />
<Typography align='center' sx={{fontSize:open? 13: 0,transition:"0.25s"}}>Muhdin</Typography>
<Typography align='center' sx={{fontSize:open? 14: 0,transition:"0.25s", color:theme.palette.info.main}}>Admin</Typography>


    <Divider />
    <List>
      {Array1.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
          <ListItemButton
          onClick={() => {
            navigate(item.path)
          }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              bgcolor:location.pathname=== item.path? theme.palette.mode==="dark"? grey[800]:grey[100]:null
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>





    <Divider />

    <List>
      {Array2.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
          <ListItemButton
           onClick={() => {
            navigate(item.path)
          }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>



    <Divider/>

    <List>
      {Array3.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
          <ListItemButton
           onClick={() => {
            navigate(item.path)
          }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  
  </Drawer>
         
  )
}
export default SideBar;