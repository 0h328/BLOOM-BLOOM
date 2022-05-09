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

const wrapState = atom({
  key: "wrapInfo",
  default: { wrapSeq: 1, wrapImage: "/img/wrapOrange.png" },
})

// 리본
const decoState = atom({
  key: "decoInfo",
  default: { decoSeq: 1, decoImage: "/img/ribbonDeepPink.png" },
})

const flowerState = atom({
  key: "flowerInfo",
  default: { flowerSeq: 1, flowerImage: "/img/flower1.png" },
})


export { 
  detailModalState, 
  decoModalState, 
  bouquetInfoState, 
  mainFlowerState,
  wrapState,
  decoState,
  flowerState,
};
