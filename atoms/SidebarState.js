import { atom } from "recoil";

const sidebarState = atom({
  key: "sidebarState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default sidebarState;
