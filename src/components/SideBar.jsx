import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { grey } from "@mui/material/colors";

import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default function SideBar({ open, handleDrawerClose }) {
  const navigate = useNavigate();
  let location = useLocation();
  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  //make transition when open or close the drawer
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
  })(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",

    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        },
      },
    ],
  }));
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const theme = useTheme();
  const Array1 = [
    { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlined />, path: "/team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlined />,
      path: "/contacts",
    },
    { text: "Invoices Balances", icon: <ReceiptOutlined />, path: "/invoices" },
  ];
  const Array2 = [
    { text: "Profile Form", icon: <PersonOutlined />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
    {
      text: "FAQ Page",
      icon: <HelpOutlineOutlined />,
      path: "/faq",
    },
  ];
  const Array3 = [
    {
      text: "Bar Chart",
      icon: <BarChartOutlined />,
      path: "/bar",
    },
    {
      text: "Pie Chart",
      icon: <PieChartOutlineOutlined />,
      path: "/pie",
    },
    {
      text: "Line Chart",
      icon: <TimelineOutlined />,
      path: "/line",
    },
    {
      text: "Geography Chart",
      icon: <MapOutlined />,
      path: "/geography",
    },
  ];
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
      <Divider />
      <Avatar
        alt="Remy Sharp"
        sx={{
          mx: "auto",
          marginTop: "25px",
          marginBottom: "15px",
          width: open ? "88px" : "44px",
          height: open ? "88px" : "44px",
          border: "2px solid gray",
          transition: "0.25s",
        }}
        src="/public/images/download.jpg"
      />
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: open ? "17px" : "0",
          transition: "0.25s",
        }}
      >
        Ahmad
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.info.main}
        sx={{
          textAlign: "center",
          fontSize: open ? "15px" : "0",
          transition: "0.25s",
        }}
      >
        Admin
      </Typography>

      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              style={{
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              style={{
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              style={{
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : "",
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
