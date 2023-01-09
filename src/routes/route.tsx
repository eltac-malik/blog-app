import { CustomRoute } from "types";

import { Announce } from "views/Announce";
import { Category } from "views/Category";
import { Industry } from "views/Industry";
import { Profile } from "views/Profile";
import { Cv } from "views/Cv";

import {
  WorkRounded,
  CategoryRounded,
  BusinessRounded,
  Person2,
  ContactPage
} from "@mui/icons-material";

export const routes: CustomRoute[] = [
  {
    name: "root",
    path: "/",
    isSeenable: false,
    element: <Announce />,
    isProtected: false
  },
  {
    path: "/announce",
    name: "Announce",
    icon: <WorkRounded />,
    element: <Announce />,
    isSeenable: true,
    isProtected: false
  },
  {
    path: "/category",
    name: "Category",
    icon: <CategoryRounded />,
    // icon: <Category />,
    element: <Category />,
    isSeenable: true,
    isProtected: false
  },
  {
    path: "/industry",
    name: "Industry",
    icon: <BusinessRounded />,
    element: <Industry />,
    isSeenable: true,
    isProtected: false
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <Person2 />,
    element: <Profile />,
    isSeenable: true,
    isProtected: true
  },
  {
    path: "/cv",
    name: "Cv",
    icon: <ContactPage />,
    element: <Cv />,
    isSeenable: true,
    isProtected: true
  }
];
