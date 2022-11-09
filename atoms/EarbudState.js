import { atom } from "recoil";

const earbudState = atom({
  key: "earbudState", // unique ID (with respect to other atoms/selectors)
  default: {
    itemsNumber: 0,
    itemName: "Earbud",
  }, // default value (aka initial value)
});

export default earbudState;
