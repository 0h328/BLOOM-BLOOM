import { atom } from "recoil";

const decoModalState = atom({
  key: "decoModal",
  default: false,
});

const mainFlowerState = atom({
  key: "mainFlower",
  default: [{ flowerSeq: 1, flowerCount: 1 }],
});

export { decoModalState, mainFlowerState };
