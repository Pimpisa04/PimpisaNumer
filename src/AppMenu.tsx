import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import Filter1RoundedIcon from '@material-ui/icons/Filter1Rounded';
import Filter2RoundedIcon from '@material-ui/icons/Filter2Rounded';
import Filter3RoundedIcon from '@material-ui/icons/Filter3Rounded';
import Filter4RoundedIcon from '@material-ui/icons/Filter4Rounded';
import Filter5RoundedIcon from '@material-ui/icons/Filter5Rounded';
import Filter7RoundedIcon from '@material-ui/icons/Filter7Rounded';

import AppMenuItem from "./AppMenuItem";
// import Item from "antd/lib/list/Item";

import "./css/AppMenu.css";

const appMenuItems = [
  {
    name: "ROOT OF EQUATION",
    Icon: Filter1RoundedIcon,
    items: [
      {
        name: "BISECTION",
        link: "/Bisection"
      },
      {
        name: "FALSE POSITION",
        link: "/False"
      },
      {
        name: "ONE POINT",
        link: "/Onepoint"
      },
      {
        name: "NEWTON RAPHSON",
        link: "/Newton"
      },
      {
        name: "SECANT",
        link: "/Secant"
      },
    ]
  },
  {
    name: "LINEAR ALGEBRA",
    Icon: Filter2RoundedIcon,
    items: [
      {
        name: "CRAMER'S RULE",
        link: "/Cramer"
      },
      {
        name: "GAUSS ELIMINATION",
        link: "/Gauss"
      },
      {
        name: "GAUSS JORDAN",
        link: "/Jordan"
      },
      {
        name: "MATRIX INVERSE",
        link: "/Inverse"
      },
      {
        name: "LU DECOMPOSITION",
        link: "/LU"
      },
      // {
      //   name: "Cholesky",
      //   link: "/Cholesky"
      // },
      // {
      //   name: "Jacobi",
      //   link: "/Jacobi"
      // },
      // {
      //   name: "Seidel",
      //   link: "/Seidel"
      // },
      // {
      //   name: "Gradient",
      //   link: "/Gradient"
      // }
    ]
  },
  {
    name: "INTERPOLATION",
    Icon: Filter3RoundedIcon,
    items: [
      {
        name: "NEWTON",
        link: "/Newton"
      },
      {
        name: "LAGRANGE",
        link: "/Lagrange"
      },
      {
        name: "SPLINE",
        link: "/Spline"
      },
      {
        name: "INVERSE",
        link: "/Inverse"
      }
    ]
  },
  {
    name: "REGRESSION",
    Icon: Filter4RoundedIcon,
    items: [
      {
        name: "LINEAR",
        link: "/Linear"
      },
      {
        name: "POLYNOMAIL",
        link: "/Polynomial"
      },
      {
        name: "MULTIPLELINEAR",
        link: "/MultipleLinear"
      }
    ]
  },
  {
    name: "INTEGRATION",
    Icon: Filter5RoundedIcon,
    items: [
      {
        name: "COMPOSITETRAPZOIDAL",
        link: "/CompositeTrapzoidal"
      },
      {
        name: "COMPOSITESIMSON",
        link: "/CompositeSimpson"
      }
    ]
  },
  // {
  //   name: "Differentiation",
  //   Icon: Filter6RoundedIcon,
  //   items: [
  //     {
  //       name: "Forwardh",
  //       link: "/Forwardh"
  //     },
  //     {
  //       name: "ForwardH2",
  //       link: "/ForwardH2"
  //     },
  //     {
  //       name: "ForwardH2",
  //       link: "/ForwardH2"
  //     },
  //     {
  //       name: "Backwardh",
  //       link: "/Backwardh"
  //     },
  //     {
  //       name: "Backwardh2",
  //       link: "/Backwardh2"
  //     },
  //     {
  //       name: "Centralh",
  //       link: "/Centralh"
  //     },
  //     {
  //       name: "Centralh2",
  //       link: "/Centralh2"
  //     }
  //   ]
  // },
  {
    name: "ODE",
    Icon: Filter7RoundedIcon,
    items: [
      {
        name: "EULER'S METHOD",
        link: "/Euler"
      },
      {
        name: "HEUN'S METHOD",
        link: "/Heun"
      },
      // {
      //   name: "Modified_Euler",
      //   link: "/Modified_Euler"
      // }
    ]
  },
];

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: "100%"
    },
    navList: {
      width: drawerWidth
    },
    menuItem: {
      width: drawerWidth
    },
    menuItemIcon: {
      color: "#8080ff"
    }
  })
);

export default AppMenu;