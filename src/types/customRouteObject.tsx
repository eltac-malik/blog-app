import { RouteObject } from "react-router-dom";

export interface CustomRouteObject {
  name: string;
  isSeenable: boolean;
  icon?: JSX.Element;
  isProtected: boolean;
}

export type CustomRoute = RouteObject & CustomRouteObject;
