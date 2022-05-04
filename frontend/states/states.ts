import { atom } from "recoil";

const detailModalState = atom({
  key: "detailModal",
  default: false,
});

const decoModalState = atom({
  key: "decoModal",
  default: false,
});

const bouquetInfoState = atom({
  key: "bouquetInfo",
  default: { bouquetSeq: 1, bouquetImage: "" },
});

const mainFlowerState = atom({
  key: "mainFlower",
  default: [{ flowerSeq: 1, flowerCount: 1 }],
});

export { detailModalState, decoModalState, bouquetInfoState, mainFlowerState };
