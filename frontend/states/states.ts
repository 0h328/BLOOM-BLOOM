import { atom } from "recoil";

const decoModalState = atom({
  key: "decoModal",
  default: false,
});

const mainFlowerState = atom({
  key: "mainFlower",
  default: [{ flowerSeq: -1, flowerCount: 0 }],
});

const presentBouquetState = atom({
  key: "presentBouquet",
  default: -1,
});

export { decoModalState, mainFlowerState, presentBouquetState };
