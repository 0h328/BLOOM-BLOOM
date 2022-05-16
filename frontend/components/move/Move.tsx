import React, { useState, useRef, useEffect } from "react";
import Moveable from "react-moveable";
import Selecto from "react-selecto";
import { Box, Grid, Button } from "@mui/material";
import { mainFlowerState } from "../../states/states";
import { useRecoilState } from "recoil";
import { flowerList } from "../flower/FlowerData";
import styles from "./global.module.css";
interface moveProps {
  finish: boolean;
}
function Move({ finish }: moveProps) {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [targets, setTargets] = useState<Array<Element>>([]);
  const [target, setTarget] = useState([]);
  const [frameMap] = useState(() => new Map());
  const moveableRef = useRef(null);
  const selectoRef = useRef(null);
  const [trigger, setTrigger] = useState(false);
  const [elementGuidelines, setElementGuidelines] = useState(null);
  const [selectedFlower, setSelectedFlower] = useState([]);
  const [mainFlower, setMainFlower] = useRecoilState(mainFlowerState);
  const [zindex, setZindex] = useState<number>(100);
  //test용
  const [flowers, setFlowers] = useState([
    "/img/carnationPink.png",
    "/img/carnationOrange.png",
    "/img/hydrangeaPurple.png",
    "/img/hydrangeaBlue.png",
    "/img/peonyWhite.png",
    "/img/lisianthusPurple.png",
    "/img/lisianthusPink.png",
    "/img/ranunculusPink.png",
  ]);
  const [windows, setWindows] = useState([
    {
      translate: [0, 0],
      scale: [1, 1],
      rotate: 0,
    },
  ]);
  const handleScaleStart = (e) => {
    const target = e.target;
    if (!frameMap.has(target)) {
      frameMap.set(target, {
        translate: [0, 0],
        scale: [1, 1],
        rotate: 0,
      });
    }
    const frame = frameMap.get(target);
    e.set(frame.scale);
    e.dragStart && e.dragStart.set(frame.translate);
  };
  const handleScale = (attr) => {
    const { target, scale, drag } = attr;
    const frame = frameMap.get(target);
    frame.scale = scale;
    frame.translate = drag.beforeTranslate;
    target.style.transform =
      `translate(${frame.translate[0]}px, ${frame.translate[1]}px) ` +
      `rotate(${frame.rotate}deg)` +
      `scale(${frame.scale[0]}, ${frame.scale[1]})`;
  };
  const handleRotateStart = (e) => {
    // const frame = windows[0];
    if (!frameMap.has(target)) {
      frameMap.set(target, {
        translate: [0, 0],
        scale: [1, 1],
        rotate: 0,
      });
    }
    const frame = frameMap.get(target);
    e.set(frame.rotate);
  };
  const handleRotate = (e) => {
    const { target, beforeRotate } = e;
    const frame = frameMap.get(target);
    frame.rotate = beforeRotate;
    target.style.transform =
      `translate(${frame.translate[0]}px, ${frame.translate[1]}px) ` +
      `rotate(${frame.rotate}deg)` +
      `scale(${frame.scale[0]}, ${frame.scale[1]})`;
  };
  const handleDragStart = (e) => {
    const target = e.target;
    if (!frameMap.has(target)) {
      frameMap.set(target, {
        translate: [0, 0],
        scale: [1, 1],
        rotate: 0,
      });
    }
    const frame = frameMap.get(target);
    e.set(frame.translate);
  };
  const handleDrag = (e) => {
    const target = e.target;
    const frame = frameMap.get(target);
    frame.translate = e.beforeTranslate;
    target.style.transform =
      `translate(${frame.translate[0]}px, ${frame.translate[1]}px) ` +
      `rotate(${frame.rotate}deg)` +
      `scale(${frame.scale[0]}, ${frame.scale[1]})`;
  };
  const handleDragGroupStart = (e) => {
    e.events.forEach((ev) => {
      const target = ev.target;
      if (!frameMap.has(target)) {
        frameMap.set(target, {
          translate: [0, 0],
          scale: [1, 1],
          rotate: 0,
        });
      }
      const frame = frameMap.get(target);
      ev.set(frame.translate);
    });
  };
  const handleClickGroup = (e) => {
    selectoRef.current.clickTarget(e.inputEvent, e.inputTarget);
  };
  const handleDragGroup = (e) => {
    e.events.forEach((ev) => {
      const target = ev.target;
      const frame = frameMap.get(target);

      frame.translate = ev.beforeTranslate;
      target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
    });
  };
  useEffect(() => {
    console.log("targets", targets[0]);
  }, [targets]);
  useEffect(() => {
    console.log("target", target);
  }, [target]);
  useEffect(() => {
    if (finish) {
      setTargets([]);
      setTarget([]);
    } else {
    }
  }, [finish]);
  useEffect(() => {
    setOnLoad(true);
    setElementGuidelines([].slice.call(document.querySelectorAll(".moveable")));
    const temp1 = mainFlower.filter((flower) => flower.flowerSeq !== -1);
    const temp2 = [];
    temp1.map((flower, index) => {
      for (let i = 0; i < flower.flowerCount; i++) {
        for (let j = 0; j < flowerList.length; j++) {
          if (flower.flowerSeq === flowerList[j].flowerSeq) {
            console.log(flowerList[j].flowerImage);
            temp2.push(flowerList[j].flowerImage);
          }
        }
      }
    });
    setSelectedFlower(temp2);
  }, []);
  return (
    <>
      {onLoad ? (
        <Box
          className="container"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Moveable
            className="moveable"
            ref={moveableRef}
            draggable={true}
            trigger={trigger}
            target={target}
            onScale={handleScale}
            onRotate={handleRotate}
            onRotateStart={handleRotateStart}
            onScaleStart={handleScaleStart}
            onClickGroup={handleClickGroup}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragGroupStart={handleDragGroupStart}
            onDragGroup={handleDragGroup}
            origin={false}
            scalable={true}
            keepRatio={false}
            snappable={true}
            throttleScale={0}
            snapThreshold={5}
            snapCenter={true}
            rotatable={true}
            rotationPosition="top"
            elementGuidelines={elementGuidelines}
          ></Moveable>
          <Selecto
            ref={selectoRef}
            dragContainer={".elements"}
            selectableTargets={[".selecto-area .cube"]}
            hitRate={0}
            selectByClick={true}
            selectFromInside={false}
            toggleContinueSelect={["shift"]}
            ratio={0}
            onDragStart={(e) => {
              const moveable = moveableRef.current;
              const target = e.inputEvent.target;
              if (
                moveable.isMoveableElement(target) ||
                targets.some((t) => t === target || t.contains(target))
              ) {
                e.stop();
              }
            }}
            onSelect={(e) => {
              setTargets(e.selected);
              setTarget(e.selected);
              if (e.selected[0]) {
                e.selected[0].parentElement.style.zIndex = String(zindex);
              }
              setZindex(zindex + 1);
              console.log(e.selected);
            }}
            onSelectEnd={(e) => {
              const moveable = moveableRef.current;
              if (e.isDragStart) {
                e.inputEvent.preventDefault();

                setTimeout(() => {
                  moveable.dragStart(e.inputEvent);
                });
              }
            }}
          ></Selecto>
          <Box
            className="elements selecto-area moveable"
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              // disableGutters
              maxHeight="100%"
              maxWidth="sm"
              justifyContent="center"
              sx={{}}
            >
              {selectedFlower.map((item, index) => (
                <Grid
                  className="element"
                  item
                  sm={2.3}
                  xs={3}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    // padding: "2%",
                  }}
                >
                  <Box
                    className={finish ? null : "cube target"}
                    sx={{
                      width: "100%",
                      height: "100%",
                      // margin: "5px",
                    }}
                  >
                    <img
                      src={item}
                      style={{
                        borderRadius: "200px",
                        height: "100%",
                        width: "100%",
                      }}
                    ></img>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
export default Move;
