import { Navigation } from "react-native-navigation";

import { Home } from "../home/Home";
import { Screen2 } from "../screen2/Screen2";
import { Screen3 } from "../screen3/Screen3";
import { Screen4 } from "../screen4/Screen4";
import { Screen5 } from "../screen5/Screen5";
import { Screen6 } from "../screen6/Screen6";
import { Counter } from "../counter/Counter";
import { Drawer } from "../drawer/Drawer";
import { getVar } from "react-native-ueno-css-modules";
// @ts-ignore
import vars from "../../utils/themevars.js";

export interface IScreen {
  componentId: string;
  testID?: string;
}

export const Screens = new Map();

export const HOME = "ueno-rns.Home";
export const SCREEN2 = "ueno-rns.Screen2";
export const SCREEN3 = "ueno-rns.Screen3";
export const SCREEN4 = "ueno-rns.Screen4";
export const SCREEN5 = "ueno-rns.Screen5";
export const SCREEN6 = "ueno-rns.Screen6";
export const COUNTER = "ueno-rns.Counter";
export const DRAWER = "ueno-rns.Drawer";

Screens.set(HOME, Home);
Screens.set(SCREEN2, Screen2);
Screens.set(SCREEN3, Screen3);
Screens.set(SCREEN4, Screen4);
Screens.set(SCREEN5, Screen5);
Screens.set(SCREEN6, Screen6);
Screens.set(COUNTER, Counter);
Screens.set(DRAWER, Drawer);

 
   export const    left = {
      component: {
        name: DRAWER,
        passProps: {
          text: "This is a left side menu screen"
        },
        options: {
          bottomTabs: {
            backgroundColor: vars.dark
          }
        }
      }
    } 