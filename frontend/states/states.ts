import { atom } from "recoil";

const decoModalState = atom({
  key: "decoModal",
  default: false,
});

const mainFlowerState = atom({
  key: "mainFlower",
  default: [{ flowerSeq: -1, flowerCount: 0 }],
});

const presentState = atom({
  key: "present",
  default: { bouqeutSeq: -1, presentDesc: "" },
});

export { decoModalState, mainFlowerState, presentState };
