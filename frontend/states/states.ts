import { atom } from "recoil";

const decoModalState = atom({
  key: "decoModal",
  default: false,
});

const mainFlowerState = atom({
  key: "mainFlower",
  // default: [{ flowerSeq: -1, flowerCount: 0, flowerImage: "" }],
  default: [{ flowerSeq: -1, flowerCount: 0 }],
});

const presentBouquetState = atom({
  key: "presentBouquet",
  default: "",
});

// 포장지
const wrapState = atom({
  key: "wrapInfo",
  default: {
    wrapSeq: 1,
    wrapImage: "/img/wrapOrange.png",
    wrapBackImage: "/img/wrapBackOrange.png",
    wrapFrontImage: "/img/wrapFrontOrange.png",
  },
});

// 리본
const decoState = atom({
  key: "decoInfo",
  default: { decoSeq: 1, decoImage: "/img/ribbonDeepPink.png" },
});

// 부속꽃
const flowerState = atom({
  key: "flowerInfo",
  default: { flowerSeq: 1, flowerImage: "/img/flower1.png" },
});

const adminState = atom({
  key: "AdminInfo",
  default: false,
});

const storeImageState = atom({
  key: "storeImageLink",
  default: false,
});
const saveBouquetState = atom({
  key: "saveFlower",
  default: "",
});

const totalCountState = atom({
  key: "totalCount",
  default: 0,
});

export {
  decoModalState,
  mainFlowerState,
  wrapState,
  decoState,
  flowerState,
  presentBouquetState,
  adminState,
  storeImageState,
  totalCountState,
};
