import { atom } from "recoil";

const detailModalState = atom({
  key: "detailModal",
  default: false,
});

const decoModalState = atom({
  key: "decoModal",
  default: false,
})

const bouquetInfoState = atom({
  key: "bouquetInfo",
  default: { bouquetSeq: 1, bouquetImage: "" },
});

export { detailModalState, decoModalState, bouquetInfoState };
